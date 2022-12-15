import { createActions, handleActions } from "redux-actions";
import { DayType } from '../../types'
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

export interface DayState {
  day: DayType[] | null;
  loading: boolean;
  error: Error | null;
}

const initialState: DayState = {
  day: null,
  loading: false,
  error: null
}

const prefix = "english/day"

export const { pending, success, fail } = createActions(
  'PENDING',
  'SUCCESS',
  'FAIL',
  {prefix}
)

const reducer = handleActions<DayState, DayType[]>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null
    }),
    SUCCESS: (state, action) => ({
      ...state,
      day: action.payload,
      loading: false,
      error: null
    }),
    FAIL: (state, action:any) => ({
      ...state,
      loading: false,
      error: action.payload
    })
  }, initialState, { prefix }
)

export default reducer

//saga

export const { getDay } = createActions("GETDAY", {prefix})

export function* daySaga() {
  yield takeEvery(`${prefix}/GETDAY`, getDaySaga)
}


async function getDayAPI(): Promise<string> {
  const res = await axios.get('http://localhost:3001/api/day')
  
  return res.data
}

export function* getDaySaga() {
  try {
    yield put(pending())
    const data: [] = yield call(getDayAPI)
    yield put(success(data))
  } catch(error) {
    console.log(error)
  }
}