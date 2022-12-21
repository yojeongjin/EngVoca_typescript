import { AnyAction } from "redux";
import axios from "axios";
import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { DayType, GetDayType, UpdateReqType } from "../../types";

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

const reducer = handleActions<DayState, any> (
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
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload
    })
  }, initialState, { prefix }
)

export default reducer

//saga

export const { getDayWord, updateActive } = createActions("GET_DAY_WORD","UPDATE_ACTIVE", {prefix})

export function* daySaga() {
  yield takeEvery(`${prefix}/GET_DAY_WORD`, getDayWordSaga)
  yield takeEvery(`${prefix}/UPDATE_ACTIVE`, updateActiveSaga)
}

interface getDayWordSagaAction extends AnyAction {
  payload: GetDayType
}


async function getDayAPI(idx: any): Promise<string> {
  const res = await axios.get('http://localhost:3001/api/words/'+idx, {params: {
    idx: idx}
  })

  return res.data
}

function* getDayWordSaga(action: getDayWordSagaAction) {
  try {
    const { idx } = action.payload
    yield put(pending())
    const day: DayType[] = yield call(getDayAPI, idx)
    yield put(success(day))
  } catch(error) {
    yield put(fail('UNKNOWN_ERROR'))
  }
}

interface updateActiveSagaAction extends AnyAction {
  payload: UpdateReqType
}

async function updateAPI(updateData: UpdateReqType): Promise<string> {
  return await axios.patch('http://localhost:3001/api/day', updateData)
}

function* updateActiveSaga(action: updateActiveSagaAction) {
  try{
    yield put(pending())
    yield call(updateAPI, action.payload)
  } catch(error) {
    yield put(fail('UNKNOWN_ERROR'))
  }
}