import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import auth from './auth'

import { usersReducer } from './users'
import { blocksCardioReducer, blocksRenalReducer, blocksEfastReducer, blocksRuqReducer } from './blocks'
import { takesReducer } from './takes'

const reducer = combineReducers({
  auth,
  users: usersReducer,
  cardiothoracic: blocksCardioReducer,
  renal: blocksRenalReducer,
  efast: blocksEfastReducer,
  ruq: blocksRuqReducer,
  takes: takesReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
