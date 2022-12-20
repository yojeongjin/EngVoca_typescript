import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState, DeleteType } from '../types';
import Notebook from '../components/Notebook';
import { deleteWord as deleteWordSagaStart, getWord as getWordSagaStart } from '../redux/modules/save';
import useUser from '../hooks/useUser';

const NotebookContainer: React.FC = () => {
  const dispatch = useDispatch()
  const wordList = useSelector<RootState, [] | null>((state) => state.save.word)
  const user = useUser()

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