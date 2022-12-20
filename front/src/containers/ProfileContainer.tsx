import React, { useCallback }   from 'react';
import { useDispatch } from 'react-redux';
import { persistor } from '../redux/create';
import { logout as logoutSagaStart, modi as modiSagaStart } from '../redux/modules/auth';
import useUser from '../hooks/useUser';
import { useState } from 'react';

import ProfileCard from '../components/ProfileCard';
import EditProfile from '../components/EditProfile';
import { ModiReqType } from '../types';

const ProfileContainer: React.FC = () => {
  const dispatch = useDispatch()
  const user = useUser()
  const [ edit, setEdit ] = useState<boolean>(false)

  const logout = useCallback(async ()=> {
    const purge = async () => {
      await persistor.purge()
    }
    await dispatch(logoutSagaStart())
    await setTimeout(() => purge(), 200)
  }, [dispatch])

  const editContent = useCallback((req:ModiReqType) => {
    dispatch(modiSagaStart(req))
  },[dispatch])

  const editHandler = () => {
    setEdit(true)
  }

  if(edit) {
    return <EditProfile user={user} editContent={editContent} />
  }
  return <ProfileCard logout={logout} user={user} editHandler={editHandler} />
}

export default ProfileContainer