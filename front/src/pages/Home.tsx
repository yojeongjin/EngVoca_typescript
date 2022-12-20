import React from "react";

import SigninContainer from "../containers/SigninContainer";
import LeftSide from "../components/LeftSide";
import DayContainer from "../containers/DayContainer";
import useUser from "../hooks/useUser";


const Home: React.FC = () => {
  const user = useUser()


  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <LeftSide />
      <DayContainer />
    </>
  )
}

export default Home