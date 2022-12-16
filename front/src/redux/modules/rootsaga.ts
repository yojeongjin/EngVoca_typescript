import { all } from 'redux-saga/effects'
import { authSaga } from './auth'
import { saveSaga } from './save'

export default function* rootSaga() {
  yield all ([authSaga(), saveSaga()])
}