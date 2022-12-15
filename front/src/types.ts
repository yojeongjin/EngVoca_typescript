import { AuthState } from "./redux/modules/auth";
import { DayState } from "./redux/modules/day";

export type LoginReqType = {
  email: string
  password: string
}

export interface RootState {
  auth: AuthState
  day: DayState
}

export interface DayType {
  idDay:number
  DayActive: string
}