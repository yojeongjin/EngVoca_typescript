import React from "react";

import SigninContainer from "../containers/SigninContainer";
import LeftSide from "../components/LeftSide";
import EachTypeList from "../components/EachTypeList";
import useUser from "../hooks/useUser";

export default function EachType() {
    const user = useUser()

  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <LeftSide />
      <EachTypeList />
    </>

  )
}