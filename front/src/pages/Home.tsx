import React from "react";

import SigninContainer from "../containers/SigninContainer";
import LeftSide from "../components/LeftSide";
import DayContainer from "../containers/DayContainer";
import useUser from "../hooks/useUser";


export default function Home() {
  const user = useUser()


  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <LeftSide />
      <DayContainer />
    </>
  )
}