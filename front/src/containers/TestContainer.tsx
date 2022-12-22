import axios from "axios"
import React, { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import TestComponent from "../components/TestComponent"
import useUser from "../hooks/useUser"
import { saving } from "../redux/modules/save"
import {DayType, SaveReqType } from "../types"


const TestContainer: React.FC = () => {
  const user = useUser()
  const dispatch = useDispatch()
  const params = useParams()
  const idx = params.idx
  const [ words, setWords ] =useState<DayType[]>([])

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
  
  const saveWord = useCallback((saveData: SaveReqType) => {
    dispatch(saving(saveData))
  }, [dispatch])
  
  return <TestComponent user={user} saveWord={saveWord} words={words} />
}

export default TestContainer