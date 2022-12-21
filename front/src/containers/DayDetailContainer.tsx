import React, { useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import DayDetail from "../components/DayDetail"
import useUser from "../hooks/useUser"
import { getDayWord, updateActive } from "../redux/modules/day"
import { UpdateReqType } from "../types"

const DayDetailContainer: React.FC = () => {
  const user = useUser()
  const params = useParams()
  const idx = params.idx
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDayWord({idx}))
  },[])
  
  const modiActive = useCallback((updateData: UpdateReqType) => {
    dispatch(updateActive(updateData))
  }, [dispatch])
  return <DayDetail user={user} modiActive={modiActive} idx={idx} />
}

export default DayDetailContainer