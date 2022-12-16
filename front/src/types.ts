import { AuthState } from "./redux/modules/auth";

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
  meaning: String
  idUser: number
}

export type DayWords = {
  words: string
  meaning: string
  idVocabulary: number
  isSave: boolean
}

export type UserType = {
  jwt: string
  idUser: number
}

export interface RootState {
  auth: AuthState
}

export interface DayType {
  idDay:number
  DayActive: string
}
