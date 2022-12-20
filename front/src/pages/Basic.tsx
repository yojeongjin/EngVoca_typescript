import React from "react";

import SigninContainer from "../containers/SigninContainer";
import LeftSide from "../components/LeftSide";
import BasicList from "../components/BasicList";
import useUser from "../hooks/useUser";

const Basic: React.FC = () => {
    const user = useUser()

  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <LeftSide />
      <BasicList />
    </>

  )
}

export default Basic