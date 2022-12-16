import { AnyAction } from 'redux';
import { createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { LoginReqType, UserType } from "../../types";

export interface AuthState {
  user: UserType | null;
  loading: boolean;
  error: Error | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null
}

const prefix = "english/auth"

export const { pending, success, fail } = createActions(
  'PENDING',
  'SUCCESS',
  'FAIL',
  {prefix}
)


const reducer = handleActions<AuthState,any>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null
    }),
    SUCCESS: (state, action) => ({
      ...state,
      user: action.payload,
      loading: false,
      error: null
    }),
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload
    })
  }, initialState, { prefix }
)

export default reducer

//saga
export const { login, logout } = createActions("LOGIN", "LOGOUT", {prefix})


export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga)
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga)
}

interface LoginSagaAction extends AnyAction {
  payload: LoginReqType;
}

async function loginAPI(loginData: LoginReqType): Promise<string> {
  const res = await axios.post('http://localhost:3001/api/signin', loginData)
  
  return res.data.result
}

function* loginSaga(action:LoginSagaAction) {
  try{
    yield put(pending())
    const user: UserType = yield call(loginAPI, action.payload)
    yield put(success(user))
    window.location.replace('/')
  } catch(error) {
    yield put(fail('UNKNOWN_ERROR'))
    alert('아이디와 비밀번호를 확인해주세요.')
  }
}

function* logoutSaga() {
  try{
    yield put(pending())
    yield put(success(null))
  } catch(error) {
    console.log(error)
  }
}