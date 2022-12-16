import React, { useEffect, useState } from 'react';
import DayPractice from '../components/DayPractice';
import { ActiveReqType,DayType } from '../types';
import axios from 'axios';

const DayContainer: React.FC = () => {
  const [ dayData, setDayData ] = useState<DayType[] | null>([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/day')
    .then((res) => {
      console.log(res.data)
      setDayData(res.data)
    })
  },[])

   const changeActive = (reqData:ActiveReqType) => {
    axios.patch('http://localhost:3001/api/day', reqData)
    .then((res) => {
      console.log(res.data.msg)
    })
  }

  return (
    <DayPractice  dayData={dayData} changeActive={changeActive} />
  )
}


export default DayContainer