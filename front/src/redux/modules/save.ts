import { AnyAction } from 'redux';
import { createActions, handleActions } from "redux-actions"
import { call, put, takeEvery, select } from "redux-saga/effects"
import axios from 'axios';

import { SaveReqType, wordList, DeleteType } from "../../types";


export interface SaveState {
  word: [] | null
  loading: boolean
  error: Error | null
}

const initialState: SaveState = {
  word: [],
  loading: false,
  error: null
}

const prefix = "english/save"

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
)

const reducer = handleActions<SaveState,[]>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null
    }),
    SUCCESS: (state, action) => ({
      ...state,
      word: action.payload,
      loading: false,
      error: null
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload
    })
  }, initialState, { prefix }
)

export default reducer


//saga
export const { saving, deleteWord } = createActions("SAVING","DELETE_WORD", {prefix})

export function* saveSaga() {
  yield takeEvery(`${prefix}/SAVING`, savingSaga)
  yield takeEvery(`${prefix}/DELETE_WORD`, deleteWordSaga)
}

interface saveSagaAction extends AnyAction {
  payload: SaveReqType
}

async function saveAPI(saveData: SaveReqType): Promise<string> {
  const res = await axios.post('http://localhost:3001/api/save', saveData)
  
  return res.data
}

function* savingSaga(action:saveSagaAction) {
  try{
    yield put(pending())
    const word: [] = yield call(saveAPI, action.payload)
    yield put(success(word))
  } catch(error) {
    yield put(fail('UNKNOWN_ERROR'))
  }
}

interface deleteWordSagaAction extends AnyAction {
  payload:  DeleteType
}

async function deleteAPI(deleteData: any): Promise<string> {
  return await axios.delete('http://localhost:3001/api/save', {params: {
    idTest :deleteData}
  })
}

function* deleteWordSaga(action: deleteWordSagaAction) {
  try {
    const { idTest } = action.payload;
    yield put(pending())
    yield call(deleteAPI, idTest)
    const word: wordList[] = yield select(state=>state.save.word)
    yield put(success(word.filter((word) => word.idTest !== idTest)))
  } catch (error) {
    yield put(fail('UNKNOWN_ERROR'));
  }
}