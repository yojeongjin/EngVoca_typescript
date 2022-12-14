import { AuthState } from "./redux/modules/auth";

export type LoginReqType = {
  email: string;
  password: string
}

export interface RootState {
  auth: AuthState
}