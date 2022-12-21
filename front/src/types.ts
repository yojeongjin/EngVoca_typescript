import { AuthState } from "./redux/modules/auth";
import { DayState } from "./redux/modules/day";
import { SaveState } from "./redux/modules/save";
import { TestState } from "./redux/modules/test";

export type LoginReqType = {
  email: string
  password: string
}

export type JoinReqType = {
  email: string
  password: string
  repassword: string
  name: string
  img: string
}

export type ModiReqType = {
  name: string
  img: string
  idUser: number
}

export type UpdateReqType = {
  Day: string
  active: string
  idUser: number
}

export type ActiveReqType = {
  Day: string
  active: string
  idUser: number
}

export type SaveReqType = {
  word: string
  meaning: string
  idUser: number
}

export type DeleteType = {
  idTest: number
}

export type GetWordType = {
  idUser: number
}

export type GetDayType = {
  idx: string
}

export type EachWords = {
  voca: string
  meaning: string
  chapter: string
  idAllVoca: number
}

export type UserType = {
  jwt: string
  idUser: number
  UserName: string
  UserEmail: string
  UserImg: string
}

export type TestType = {
  voca: string
  meaning: string
}

export type wordList = {
  voca: string
  meaning: string
  idUser: number
  idTest: number
}

export type DayType = {
  DayCheck: string
  words: string
  meaning: string
  idVocabulary: number
  isSave: boolean
}


export interface RootState {
  auth: AuthState
  save: SaveState
  test: TestState
  day: DayState
}

