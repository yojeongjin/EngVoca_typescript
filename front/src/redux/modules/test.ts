import { createActions, handleActions } from "redux-actions";
import { takeEvery, put, call } from "redux-saga/effects";
import { TestType } from "../../types";
import axios from "axios";

export interface TestState {
  test: TestType[] | null;
  loading: boolean;
  error: Error | null;
}

const initialState: TestState = {
  test: null,
  loading: false,
  error: null
}

const prefix = "english/test"

export const { pending, success, fail } = createActions(
  'PENDING',
  'SUCCESS',
  'FAIL',
  {prefix}
)

const reducer = handleActions<TestState, any> (
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null
    }),
    SUCCESS: (state, action) => ({
      ...state,
      test: action.payload,
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

export const { getTestWord } = createActions("GET_TEST_WORD", {prefix})

export function* testSaga() {
  yield takeEvery(`${prefix}/GET_TEST_WORD`, getTestWordSaga)
}


async function getTestWordAPI(): Promise<string> {
  const res = await axios.get('http://localhost:3001/api/test')
  let randomData = res.data.sort(() => Math.random() - 0.5)
  randomData.length = 10
  return randomData
}

function* getTestWordSaga() {
  try{
    yield put(pending())
    const test: TestType = yield call(getTestWordAPI)
    yield put(success(test))
  } catch(error) {
    yield put(fail('UNKNOWN_ERROR'))
  }
}