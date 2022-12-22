import React from 'react';
import styled from 'styled-components';
import { wordList, DeleteType } from '../types';
import { Main } from './Main';
import { Desktop, Mobile } from '../hooks/useMediaQuery';

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
  wordList?.map((word) => {
    return (
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
    )
  })


  if (wordList?.length === 0) {
    return (
      <>
        <Desktop>
          <Main>
            <NotebookBase>
              <Inner>
                <NoteContent>
                  <Content style={{color: "#4D94E6", marginTop: "100px", textAlign: "center"}}>
                    💌 아직 저장된 단어가 없어요!
                  </Content>
                </NoteContent>
              </Inner>
            </NotebookBase>
          </Main>
        </Desktop>

        {/* 모바일 */}
        <Mobile>
          <NotebookBase>
            <Inner>
              <NoteContent>
                <Content style={{color: "#4D94E6", marginTop: "200px", textAlign: "center"}}>
                  💌 아직 저장된 단어가 없어요!
                </Content>
              </NoteContent>
            </Inner>
          </NotebookBase>
        </Mobile>
      </>

    )
  } 
  return (
    <>
      <Desktop>
        <Main>
          <NotebookBase>
            <Inner>
              <NoteContent>
                <NoteTitle>
                  <H1 style={{width: "45%"}}>VOCA</H1>
                  <H1 style={{width: "55%"}}>MEANING</H1>
                </NoteTitle>
                <Content>
                  {wordDetail}
                </Content>
              </NoteContent>
            </Inner>
          </NotebookBase>
        </Main>
      </Desktop>

      {/* 모바일 */}
      <Mobile>
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
      </Mobile>
    </>

  )
}

export default Notebook

const NotebookBase = styled.div`
font-size: 14px;
color: #252525;
font-weight: 300;

@media ${props => props.theme.mobile} {
  font-size: 12px;
}
`

const Inner = styled.div`
width: 700px;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;

@media ${props => props.theme.mobile} {
  width: 370px;
}
`

const NoteContent = styled.div`
width: 80%;
height: 95%;
background-color: #fff;
border-radius: 12px;
box-shadow : 5px 5px 8px -8px;
padding: 0 20px 10px;
overflow-y: scroll;

@media ${props => props.theme.mobile} {
  width: 93%;
  height: 65%;
}
`

const NoteTitle = styled.div`
width: 100%;
padding: 20px 0 0;
display: flex;
font-size: 16px;
font-weight: 500;
@media ${props => props.theme.mobile} {
  margin-top: 10px;
  font-size: 14px;
}
`

const H1 = styled.h1`
letter-spacing: 6px;
padding: 0 5px;
`
const Content = styled.div`
width: 100%;
margin-top: 20px;
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