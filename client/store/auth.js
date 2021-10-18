import axios from 'axios'
import history from '../history'
// import { createTake } from './takes'

const TOKEN = 'token'

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH'

/**
 * ACTION CREATORS
 */
const setAuth = auth => ({ type: SET_AUTH, auth })

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  if (token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token
      }
    })
    return dispatch(setAuth(res.data))
  }
}

export const authenticate = (username, password, method, fullName) => async dispatch => {
  try {
    const res = await axios.post(`/auth/${method}`, { username, password, fullName })
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())

    if (method === 'signup') {
      window.localStorage.setItem('justRegistered', 'true');
    }
    history.push("/home");
  } catch (authError) {
    return dispatch(setAuth({ error: authError }))
  }
}

// const moveTakeDB = async (take, user) => {
//   for (let i = 0; i < take.length; i++) {
//     await createTake(userId, blockId, score)
//   }
// }

export const logout = () => {
  window.localStorage.removeItem(TOKEN)
  history.push('/login')
  return {
    type: SET_AUTH,
    auth: {}
  }
}

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth
    default:
      return state
  }
}
