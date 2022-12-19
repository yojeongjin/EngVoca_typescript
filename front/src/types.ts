import { AuthState } from "./redux/modules/auth";
import { SaveState } from "./redux/modules/save";

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
  idTest: number
}

export type GetWordType = {
  idUser: number
}

export type DayWords = {
  words: string
  meaning: string
  idVocabulary: number
  isSave: boolean
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
