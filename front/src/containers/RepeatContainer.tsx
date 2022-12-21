import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RepeatTest from '../components/RepeatTest'
import { getTestWord } from '../redux/modules/test'

const RepeatContainer: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getTestWord())
  },[])


  return <RepeatTest />
}


export default RepeatContainer