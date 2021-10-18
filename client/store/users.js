import axios from 'axios';

// ACTION TYPES
const GET_USERS = 'GET_USERS';
const GET_USER = 'GET_USER';
const UPDATE_USER = 'UPDATE_USER'

// ACTION CREATORS
const _getUsers = (users) => {
  return {
    type: GET_USERS,
    users
  }
}
const _getUser = (user) => {
  return {
    type: GET_USER,
    user
  }
}

// THUNK CREATORS
export const getUsers = () => {
  return async (dispatch) => {
    const { data: users } = await axios.get('/api/users');
    dispatch(_getUsers(users));
  }
}
export const getUser = (id) => {
  return async (dispatch) => {
    const { data: user } = await axios.get(`/api/users/${id}`);
    dispatch(_getUser(user));
  }
}
export const updateUser = (updatedUser) => {

  const id = updatedUser.id;
  return async (dispatch) => {
    console.log('UPDATE THUNK CHECK ==> ', updatedUser)
    const { data: updated } = await axios.post(`/api/users/${id}`, updatedUser);
  }
}

// REDUCER
export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case GET_USER:
      return action.user;
    default:
      return state
  }
}