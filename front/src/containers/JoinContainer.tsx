import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import JoinComponent from '../components/JoinComponent'
import { JoinReqType } from '../types'
import { join as joinSagaStart } from '../redux/modules/auth'


const JoinContainer: React.FC = () => {
  const dispatch = useDispatch()

  const join = useCallback((reqData:JoinReqType) => {
    dispatch(joinSagaStart(reqData))
  }, [dispatch])


  return <JoinComponent join={join}/>
}

export default JoinContainer