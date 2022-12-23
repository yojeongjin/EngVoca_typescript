import React from "react"
import LeftSide from "../components/LeftSide"
import SigninContainer from "../containers/SigninContainer"
import TestContainer from "../containers/TestContainer"
import useUser from "../hooks/useUser"

import { Desktop, Mobile } from "../hooks/useMediaQuery";
import { Main } from "../components/Main";
import BottomNav from "../components/BottomNav";

const Test: React.FC = () => {
  const user = useUser()

  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <Desktop>
        <Main>
          <LeftSide />
          <TestContainer />
        </Main>
      </Desktop>
      <Mobile>
        <>
          <TestContainer />
          <BottomNav />
        </>
      </Mobile>
    </>
  ) 
}

export default Test