import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import { createLogger } from 'redux-logger'

const middleware = applyMiddleware(createLogger());

export default createStore(reducer, middleware)

