import React from "react"
import LeftSide from "../components/LeftSide"
import SigninContainer from "../containers/SigninContainer"
import TestContainer from "../containers/TestContainer"
import useUser from "../hooks/useUser"

const Test: React.FC = () => {
  const user = useUser()

  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <TestContainer />
      <LeftSide />
    </>
  ) 
}

export default Test