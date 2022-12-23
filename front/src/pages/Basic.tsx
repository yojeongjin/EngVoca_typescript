import React from "react";

import SigninContainer from "../containers/SigninContainer";
import LeftSide from "../components/LeftSide";
import BasicList from "../components/BasicList";
import useUser from "../hooks/useUser";

import { Desktop, Mobile } from "../hooks/useMediaQuery";
import { Main } from "../components/Main";
import BottomNav from "../components/BottomNav";

const Basic: React.FC = () => {
    const user = useUser()

  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <Desktop>
        <Main>
          <LeftSide />
          <BasicList />
        </Main>
      </Desktop>
      <Mobile>
        <>
          <BasicList />
          <BottomNav />
        </>
      </Mobile>
    </>
  )
}

export default Basic