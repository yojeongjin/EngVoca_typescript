import React, { useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import DayDetail from "../components/DayDetail"
import useUser from "../hooks/useUser"
import { getDayWord, updateActive } from "../redux/modules/day"
import { DayType, RootState, UpdateReqType,  } from "../types"

const DayDetailContainer: React.FC = () => {
  const words = useSelector<RootState, DayType[] |null>((state) => state.day.day)
  const user = useUser()
  const params = useParams()
  const dispatch = useDispatch()
  const idx = params.idx

  useEffect(() => {
    dispatch(getDayWord({idx}))
  },[])
  
  const modiActive = useCallback((updateData: UpdateReqType) => {
    dispatch(updateActive(updateData))
  }, [dispatch])
  return <DayDetail user={user} modiActive={modiActive} words={words} idx={idx} />
}

export default DayDetailContainer