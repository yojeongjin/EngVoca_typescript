import React  from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ProfileCard from '../components/ProfileCard';
import { logout as logoutSagaStart } from '../redux/modules/auth';

export default function ProfileContainer() {
  const dispatch = useDispatch()

  const logout = useCallback(()=> {
    dispatch(logoutSagaStart())
    
  }, [dispatch])

  return <ProfileCard logout={logout} />
}