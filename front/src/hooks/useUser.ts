import { useSelector } from "react-redux";
import { RootState, UserType } from "../types";

export default function useUser() {
  const user = useSelector<RootState , UserType | null>((state) => state.auth.user)
  
  return user
}