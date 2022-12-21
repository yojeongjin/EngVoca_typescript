import { all } from 'redux-saga/effects'
import { authSaga } from './auth'
import { saveSaga } from './save'
import { testSaga } from './test'
import { daySaga } from './day'

export default function* rootSaga() {
  yield all ([authSaga(), saveSaga(), testSaga(), daySaga()])
}