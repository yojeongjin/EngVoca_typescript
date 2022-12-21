import React from "react"
import LeftSide from "../components/LeftSide"
import DayDetailContainer from "../containers/DayDetailContainer"
import SigninContainer from "../containers/SigninContainer"
import useUser from "../hooks/useUser"

const Day: React.FC = () => {
  const user = useUser()

  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <LeftSide />
      <DayDetailContainer />
    </>
  ) 
}

export default Day