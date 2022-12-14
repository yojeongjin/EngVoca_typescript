import { AnyAction } from 'redux';
import { createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { LoginReqType } from "../../types";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

const initialState: AuthState = {
  token: null,
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
      token: action.payload,
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
export const { login } = createActions("LOGIN", "LOGOUT", {prefix})


export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga)
}

interface LoginSagaAction extends AnyAction {
  payload: LoginReqType;
}

async function loginAPI(loginData: LoginReqType): Promise<string> {
  const res = await axios.post('http://localhost:3001/api/signin', loginData)
  
  return res.data.result.jwt
}

function* loginSaga(action:LoginSagaAction) {
  try{
    yield put(pending())
    const token: string = yield call(loginAPI, action.payload)
    yield put(success(token))
    window.location.replace('/')
  } catch(error) {
    yield put(fail('UNKNOWN_ERROR'))
    alert('아이디와 비밀번호를 확인해주세요.')
  }
}