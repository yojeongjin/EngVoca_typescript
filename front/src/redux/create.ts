import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from '@redux-saga/core'

import reducer from './modules/reducer'
import rootSaga from './modules/rootsaga'

//redux-persist
import { persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

export default { store, persistor }