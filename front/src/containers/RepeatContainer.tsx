import React, { useEffect, useState } from 'react'
import axios from "axios";

import RepeatTest from '../components/RepeatTest'
import { TestType } from '../types';

const RepeatContainer: React.FC = () => {
  const [ test, setTest ] = useState<TestType[]>([])

  useEffect(()=> {
    axios.get('http://localhost:3001/api/test')
    .then((res) => {
      let randomData = res.data.sort(() => Math.random() - 0.5)
      randomData.length = 10

      setTest(randomData)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])


  return <RepeatTest test={test} />
}


export default RepeatContainer