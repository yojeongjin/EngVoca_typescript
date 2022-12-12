import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from '@redux-saga/core'

import reducer from './modules/reducer'
import rootSaga from './modules/rootsaga'

const create = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore (reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(rootSaga)
  
  return store
}

export default create