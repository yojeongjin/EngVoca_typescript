import React, { useState } from 'react';
import styled from 'styled-components';
import { wordList, DeleteType } from '../types';
import LeftSide from './LeftSide';
import { Main } from './Main';

interface NotebookProps {
  wordList: wordList[] | null
  deleteWord: (idTest:DeleteType) => void
}

const Notebook: React.FC<NotebookProps> = ({wordList,deleteWord}) => {
  
  const clickDelete = (idx:any) => {
    let idTest = idx
    deleteWord({idTest})
  }

  const wordDetail = 
  wordList?.map((word) => (
    <ContentWrap key={word.idTest}>
      <VocaWrap>
        <WordList>
          <WordItem>{word.voca}</WordItem>
        </WordList>
      </VocaWrap>
      <MeanWrap>
        <WordList>
          <WordItem>{word.meaning}</WordItem>
        </WordList>
      </MeanWrap>
      <DeleteContent>
        <Delete 
        src={`${process.env.PUBLIC_URL}/assets/delete.png`} 
        alt='삭제아이콘' 
        onClick={()=>{clickDelete(word.idTest)}}
        />
      </DeleteContent>
    </ContentWrap>
  ))

  return (
    <Main>
      <LeftSide />
      <NotebookBase>
        <Inner>
          <NoteContent>
            <NoteTitle>
              <H1 style={{width: "45%"}}>VOCA</H1>
              <H1>MEANING</H1>
            </NoteTitle>
            <Content>
              {wordDetail}
            </Content>
          </NoteContent>
        </Inner>
      </NotebookBase>
    </Main>
  )
}

export default Notebook

const NotebookBase = styled.div`

`

const Inner = styled.div`
width: 700px;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`

const NoteContent = styled.div`
width: 80%;
height: 95%;
background-color: #fff;
border-radius: 12px;
box-shadow : 5px 5px 8px -8px;
padding: 0 20px 10px;
overflow-y: scroll;
`

const NoteTitle = styled.div`
width: 520px;
padding: 10px 0 0;
position: fixed;
display: flex;
background-color: #fff;
z-index: 5;
`

const H1 = styled.h1`
letter-spacing: 6px;
padding: 0 5px;
`
const Content = styled.div`
width: 100%;
margin-top: 35px;
`

const ContentWrap = styled.div`
width: 100%;
display: flex;
`


const VocaWrap = styled.div`
flex: 1;
padding: 0 5px;
`

const MeanWrap = styled.div`
flex: 1;
padding: 0 5px;
`

const WordList = styled.ul`
width: 100%;
font-size: 14px;
display: flex;
flex-wrap: wrap;
`

const WordItem = styled.li`
width: 100%;
margin: 10px auto 0;
padding: 0 5px;
border-bottom: 1px solid #4D94E6;
`

const DeleteContent = styled.div`
width: 10%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`

const Delete = styled.img`
width: 20px;
height: 20px;
cursor: pointer;
`