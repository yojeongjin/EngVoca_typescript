import React, { useEffect, useState } from 'react';
import DayPractice from '../components/DayPractice';
import { ActiveReqType } from '../types';
import axios from 'axios';
import useUser from '../hooks/useUser';

const DayContainer: React.FC = () => {
  const user = useUser()
  let idUser = user.idUser
  const [ dayData, setDayData ] = useState([])

  useEffect(() => {
    axios.get('http://15.165.206.3:3001/api/day', {params: {
      idUser: idUser
    }})
    .then((res) => {
      let data = Object.entries(res.data[0]).slice(2)
      setDayData(data)
    })
  },[])

   const changeActive = (reqData:ActiveReqType) => {
    axios.patch('http://15.165.206.3:3001/api/day', reqData)
    .then((res) => {
      console.log(res.data.msg)
    })
  }

  return (
    <DayPractice  dayData={dayData} changeActive={changeActive} idUser={idUser} />
  )
}


export default DayContainer