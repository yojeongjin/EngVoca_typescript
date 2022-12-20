import React, { useCallback }   from 'react';
import { useDispatch } from 'react-redux';
import ProfileCard from '../components/ProfileCard';
import { persistor } from '../redux/create';
import { logout as logoutSagaStart } from '../redux/modules/auth';
import useUser from '../hooks/useUser';

export default function ProfileContainer() {
  const dispatch = useDispatch()
  const user = useUser()

  const logout = useCallback(async ()=> {
    const purge = async () => {
      await persistor.purge()
    }

    await dispatch(logoutSagaStart())
    await setTimeout(() => purge(), 200)
  }, [dispatch])

  return <ProfileCard logout={logout} user={user} />
}