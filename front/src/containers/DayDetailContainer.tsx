import React, { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import DayDetail from "../components/DayDetail"
import useUser from "../hooks/useUser"
import { updateActive } from "../redux/modules/day"
import { DayType, UpdateReqType } from "../types"

import axios from "axios";

const DayDetailContainer: React.FC = () => {
  const user = useUser()
  const dispatch = useDispatch()
  const params = useParams()
  const idx = params.idx
  const [ words, setWords ] = useState<DayType[]>([])

  useEffect(() => {
    axios.get('http://15.165.206.3:3001/api/words/'+idx, {params: {
    idx: idx}}
    )
    .then((res) => {
      setWords(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  
  const modiActive = useCallback((updateData: UpdateReqType) => {
    dispatch(updateActive(updateData))
  }, [dispatch])
  return <DayDetail user={user} modiActive={modiActive} idx={idx} words={words} />
}

export default DayDetailContainer