import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../types";

import SigninContainer from "../containers/SigninContainer";
import LeftSide from "../components/LeftSide";
import EachTypeList from "../components/EachTypeList";

export default function EachType() {
    const token = useSelector<RootState , {} | null>((state) => state.auth.user)

  if (token === null) {
    return <SigninContainer />
  }
  return (
    <>
      <LeftSide />
      <EachTypeList />
    </>

  )
}