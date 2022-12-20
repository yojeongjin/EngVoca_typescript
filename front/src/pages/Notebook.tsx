import React from "react";

import SigninContainer from "../containers/SigninContainer";

import LeftSide from "../components/LeftSide";
import NotebookContainer from "../containers/NotebookContainer";
import useUser from "../hooks/useUser";

export default function Notebook() {
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