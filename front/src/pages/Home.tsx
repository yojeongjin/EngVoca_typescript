import React from "react";

import SigninContainer from "../containers/SigninContainer";
import LeftSide from "../components/LeftSide";
import DayContainer from "../containers/DayContainer";
import useUser from "../hooks/useUser";

import { Desktop, Mobile } from "../hooks/useMediaQuery";
import { Main } from "../components/Main";
import BottomNav from "../components/BottomNav";

const Home: React.FC = () => {
  const user = useUser()


  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <Desktop>
        <Main>
          <LeftSide />
          <DayContainer />
        </Main>
      </Desktop>
      <Mobile>
        <>
          <DayContainer />
          <BottomNav />
        </>
      </Mobile>
    </>
  )
}

export default Home