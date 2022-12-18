import React, { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState, DeleteType, UserType } from '../types';
import Notebook from '../components/Notebook';
import { deleteWord as deleteWordSagaStart, getWord as getWordSagaStart } from '../redux/modules/save';
import { useEffect } from 'react';

const NotebookContainer: React.FC = () => {
  const dispatch = useDispatch()
  const wordList = useSelector<RootState, [] | null>((state) => state.save.word)
  const user = useSelector<RootState , UserType | null>((state) => state.auth.user)

  useEffect(() => {
    let idUser = user.idUser
    dispatch(getWordSagaStart({idUser}))
  },[])

  const deleteWord = useCallback((idTest: DeleteType) => {
    dispatch(deleteWordSagaStart(idTest))
  },[dispatch])

  return <Notebook wordList={wordList} deleteWord={deleteWord} />
}

export default NotebookContainer