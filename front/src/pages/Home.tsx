import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../types";

import SigninContainer from "../containers/SigninContainer";
import LeftSide from "../components/LeftSide";

export default function Home() {
  const token = useSelector<RootState , string | null>((state) => state.auth.token)


  if (token === null) {
    return <SigninContainer />
  }
  return (
    <LeftSide />
  )
}