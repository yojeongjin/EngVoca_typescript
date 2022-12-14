import React, { useCallback }  from 'react';
import { useDispatch } from 'react-redux';

import SigninComponent from "../components/SigninComponent";
import { login as loginSagaStart } from '../redux/modules/auth';
import { LoginReqType } from '../types';


export default function SigninContainer() {
  const dispatch = useDispatch();

  const login = useCallback((req:LoginReqType)=> {
    dispatch(loginSagaStart(req))
  }, [dispatch])

  return <SigninComponent login={login}/>
}