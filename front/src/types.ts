import { AuthState } from "./redux/modules/auth";
import { SaveState } from "./redux/modules/save";

export type LoginReqType = {
  email: string
  password: string
}

export type ActiveReqType = {
  active: string
  day: number
}

export type SaveReqType = {
  word: string
  meaning: string
  idUser: number
}

export type DeleteType = {
  idTest: Number
}

export type GetWordType = {
  idUser: Number
}

export type DayWords = {
  words: string
  meaning: string
  idVocabulary: number
  isSave: boolean
}

export type UserType = {
  jwt: string
  idUser: Number
}

export type wordList = {
  voca: string
  meaning: string
  idUser: number
  idTest: number
}

export interface RootState {
  auth: AuthState
  save: SaveState
}

export interface DayType {
  idDay:number
  DayActive: string
}
