import React from "react"
import LeftSide from "../components/LeftSide"
import DayDetailContainer from "../containers/DayDetailContainer"
import SigninContainer from "../containers/SigninContainer"
import useUser from "../hooks/useUser"

import { Desktop, Mobile } from "../hooks/useMediaQuery";
import { Main } from "../components/Main";
import BottomNav from "../components/BottomNav";


const Day: React.FC = () => {
  const user = useUser()

  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <Desktop>
        <Main>
          <LeftSide />
          <DayDetailContainer />
        </Main>
      </Desktop>
      <Mobile>
        <>
          <DayDetailContainer />
          <BottomNav />
        </>
      </Mobile>
    </>
  ) 
}

export default Day