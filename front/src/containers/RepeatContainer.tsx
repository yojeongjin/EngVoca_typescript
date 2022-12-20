import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RepeatTest from '../components/RepeatTest'
import { getTestWord } from '../redux/modules/test'
import { RootState, TestType } from '../types'

const RepeatContainer: React.FC = () => {
  const dispatch = useDispatch()
  const test = useSelector<RootState, TestType[] | null>((state) => state.test.test)

  useEffect(()=> {
    dispatch(getTestWord())
  },[])


  return <RepeatTest test={test} />
}


export default RepeatContainer