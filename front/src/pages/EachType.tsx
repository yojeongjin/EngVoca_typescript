import React from "react";

import SigninContainer from "../containers/SigninContainer";
import LeftSide from "../components/LeftSide";
import EachTypeList from "../components/EachTypeList";
import useUser from "../hooks/useUser";

const EachType: React.FC = () => {
  const user = useUser()

  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <LeftSide />
      <EachTypeList />
    </>

  )
}

export default EachType