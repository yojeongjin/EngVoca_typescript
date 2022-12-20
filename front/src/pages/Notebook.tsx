import React from "react";

import SigninContainer from "../containers/SigninContainer";

import LeftSide from "../components/LeftSide";
import NotebookContainer from "../containers/NotebookContainer";
import useUser from "../hooks/useUser";

const Notebook: React.FC = () => {
  const user = useUser()

  if (user === null) {
    return <SigninContainer />
  }
  return (
    <>
      <LeftSide />
      <NotebookContainer />
    </>
  )
}

export default Notebook