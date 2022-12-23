import React from 'react'

import LeftSide from '../components/LeftSide'
import RepeatContainer from '../containers/RepeatContainer'
import SigninContainer from '../containers/SigninContainer'
import useUser from '../hooks/useUser';

import { Desktop, Mobile } from "../hooks/useMediaQuery";
import { Main } from "../components/Main";
import BottomNav from "../components/BottomNav";

const Repeat: React.FC = () => {
  const user = useUser()

  if (user === null) {
    return <SigninContainer />
  }

  return (
    <>
      <Desktop>
        <Main>
          <LeftSide />
          <RepeatContainer />
        </Main>
      </Desktop>
      <Mobile>
        <>
          <RepeatContainer />
          <BottomNav />
        </>
      </Mobile>
    </>
  )
}


export default Repeat