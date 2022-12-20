import { all } from 'redux-saga/effects'
import { authSaga } from './auth'
import { saveSaga } from './save'
import { testSaga } from './test'

export default function* rootSaga() {
  yield all ([authSaga(), saveSaga(), testSaga()])
}