import React, { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import TestComponent from "../components/TestComponent"
import useUser from "../hooks/useUser"
import { saving } from "../redux/modules/save"
import { DayType, RootState, SaveReqType } from "../types"


const TestContainer: React.FC = () => {
  const user = useUser()
  const dispatch = useDispatch()
  const words = useSelector<RootState, DayType[] | null>((state) => state.day.day)
  
  const saveWord = useCallback((saveData: SaveReqType) => {
    dispatch(saving(saveData))
  }, [dispatch])
  
  return <TestComponent user={user} words={words} saveWord={saveWord} />
}

export default TestContainer