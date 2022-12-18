import React, { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState, DeleteType } from '../types';
import Notebook from '../components/Notebook';
import { deleteWord as deleteWordSagaStart } from '../redux/modules/save';

const NotebookContainer: React.FC = () => {
  const dispatch = useDispatch()
  const wordList = useSelector<RootState, [] | null>((state) => state.save.word)

  const deleteWord = useCallback((idTest: DeleteType) => {
    dispatch(deleteWordSagaStart(idTest))
  },[dispatch])

  return <Notebook wordList={wordList} deleteWord={deleteWord} />
}

export default NotebookContainer