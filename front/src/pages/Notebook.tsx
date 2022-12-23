import React from "react";

import SigninContainer from "../containers/SigninContainer";

import LeftSide from "../components/LeftSide";
import NotebookContainer from "../containers/NotebookContainer";
import useUser from "../hooks/useUser";

import { Desktop, Mobile } from "../hooks/useMediaQuery";
import { Main } from "../components/Main";
import BottomNav from "../components/BottomNav";

const Notebook: React.FC = () => {
  const user = useUser()

  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <Desktop>
        <Main>
          <LeftSide />
          <NotebookContainer />
        </Main>
      </Desktop>
      <Mobile>
        <>
          <NotebookContainer />
          <BottomNav />
        </>
      </Mobile>
    </>
  )
}

export default Notebook