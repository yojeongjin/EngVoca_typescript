import React, { useEffect, useState }  from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Main } from './Main';
import { EachWords } from '../types';

const BasicList: React.FC = () => {
  const location = useLocation()
  const [ chapters, setChapters ] = useState<string[]>([])
  const [ eachWords, setEachWords ] = useState<EachWords[]>([])
  const [ chapIdx, setChapIdx ] = useState<string>('chapter1')

  useEffect(() => {
    let vocaIdx = location.pathname.split('/')[1]
    axios.get('http://localhost:3001/api/eachtype', {params: {
      vocaIdx: vocaIdx, chapter: 'chapter%'}
    })
    .then((res) => {
      let AllData = res.data
      let chapterArr = AllData.map((AllData) => AllData.chapter)
      let chapters = chapterArr.filter((element, index) => {
        return chapterArr.indexOf(element) === index
      })
      const isChapter = (element) => {
        if(element.chapter === 'chapter1') {
          return true
        }
      }

      const vocas = AllData.filter(isChapter)
      setChapters(chapters)
      setEachWords(vocas)
    })
  },[])

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

    const button: HTMLButtonElement = e.currentTarget;
    let chapIdx = button.name
    setChapIdx(chapIdx)
    getVoca(chapIdx)
  }

  const getVoca = (chapIdx) => {
    let vocaIdx = location.pathname.split('/')[1]
    axios.get('http://localhost:3001/api/eachtype', {params: {
      vocaIdx: vocaIdx, chapter: chapIdx}
    })
    .then((res) => {
      setEachWords(res.data)
    })
  }


  const eachDetail =
  eachWords.map((voca) => (
    <WordsList key={voca.idAllVoca}>
      <WordsItem style={{backgroundColor: "#D4DFE6"}}>{voca.voca}</WordsItem>
      <WordsItem>{voca.meaning}</WordsItem>
    </WordsList>
  ))

  const chapterDetail =
  chapters.map((chapter,idx) => (
    <>
      <ChapterItem key={idx} isChpater={chapter === chapIdx} >
        <ChapterBtn onClick={clickHandler} name={chapter}>{chapter}</ChapterBtn>
      </ChapterItem>
    </>
  ))

  return (
    <Main>
      <BasicBase>
        <Inner>
          <ChapterTitle>
            <ChapterList>
              {chapterDetail}
            </ChapterList>
          </ChapterTitle>

          <WordContent>
            {eachDetail}
          </WordContent>

        </Inner>
      </BasicBase>
    </Main>
  )
}

export default BasicList

const BasicBase = styled.div`
font-size: 14px;
color: #252525;
`

const Inner = styled.div`
width: 750px;
height: 100vh;
margin: 0 auto;
`

const ChapterTitle = styled.div`
height: 10%;
`

const ChapterList = styled.ul`
margin-top: 20px;
display: flex;
`

const ChapterItem = styled.li<{isChpater:boolean}>`
border-radius: 12px;
margin: 0 20px;
padding: 15px 15px;
background-color: ${(props) => props.isChpater ? '#4D94E6' : '#fff'};
color: ${(props) => props.isChpater ? '#fff' : '#252525'};
&:first-child {
  margin: 0 0;
}
`

const WordContent = styled.div`
height: 79.9%;
background-color: #fff;
box-shadow : 5px 5px 8px -8px;
`

const WordsList = styled.ul`
width: 100%;
font-size: 14px;
display: flex;
flex-wrap: wrap;
border-bottom: 1px solid #aaa;
&:last-child {
  border: none;
}
`

const WordsItem = styled.li`
flex: 1;
height: 57px;
display: flex;
justify-content: center;
align-items: center;
`

const ChapterBtn = styled.button`

`