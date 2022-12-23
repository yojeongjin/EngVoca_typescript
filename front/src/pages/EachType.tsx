import React from "react";

import SigninContainer from "../containers/SigninContainer";
import LeftSide from "../components/LeftSide";
import EachTypeList from "../components/EachTypeList";
import useUser from "../hooks/useUser";

import { Desktop, Mobile } from "../hooks/useMediaQuery";
import { Main } from "../components/Main";
import BottomNav from "../components/BottomNav";

const EachType: React.FC = () => {
  const user = useUser()

  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <Desktop>
        <Main>
          <LeftSide />
          <EachTypeList />
        </Main>
      </Desktop>
      <Mobile>
        <>
          <EachTypeList />
          <BottomNav />
        </>
      </Mobile>
    </>
  )
}

export default EachType