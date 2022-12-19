import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../types";

import LeftSide from '../components/LeftSide'
import RepeatContainer from '../containers/RepeatContainer'
import SigninContainer from '../containers/SigninContainer'

const Repeat: React.FC = () => {
  const token = useSelector<RootState , {} | null>((state) => state.auth.user)

  if (token === null) {
    return <SigninContainer />
  }

  return (
    <>
      <LeftSide />
      <RepeatContainer />
    </>
  )
}


export default Repeat