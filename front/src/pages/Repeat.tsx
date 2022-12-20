import React from 'react'

import LeftSide from '../components/LeftSide'
import RepeatContainer from '../containers/RepeatContainer'
import SigninContainer from '../containers/SigninContainer'
import useUser from '../hooks/useUser';

const Repeat: React.FC = () => {
  const user = useUser()

  if (user === null) {
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