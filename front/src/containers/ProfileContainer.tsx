import React  from 'react';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, UserType } from '../types';
import ProfileCard from '../components/ProfileCard';
import { persistor } from '../redux/create';
import { logout as logoutSagaStart } from '../redux/modules/auth';

export default function ProfileContainer() {
  const dispatch = useDispatch()
  const user = useSelector<RootState , UserType | null>((state) => state.auth.user)

  const logout = useCallback(async ()=> {
    const purge = async () => {
      await persistor.purge()
    }

    await dispatch(logoutSagaStart())
    await setTimeout(() => purge(), 200)
  }, [dispatch])

  return <ProfileCard logout={logout} user={user} />
}