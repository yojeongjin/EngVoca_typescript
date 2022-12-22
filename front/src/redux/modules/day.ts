import { AnyAction } from "redux";
import axios from "axios";
import { createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { DayType, UpdateReqType } from "../../types";

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

export const { updateActive } = createActions("UPDATE_ACTIVE", {prefix})

export function* daySaga() {
  yield takeEvery(`${prefix}/UPDATE_ACTIVE`, updateActiveSaga)
}

interface updateActiveSagaAction extends AnyAction {
  payload: UpdateReqType
}

async function updateAPI(updateData: UpdateReqType): Promise<string> {
  return await axios.patch('http://15.165.206.3:3001/api/day', updateData)
}

function* updateActiveSaga(action: updateActiveSagaAction) {
  try{
    yield put(pending())
    yield call(updateAPI, action.payload)
  } catch(error) {
    yield put(fail('UNKNOWN_ERROR'))
  }
}