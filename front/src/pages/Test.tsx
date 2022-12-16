import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Main } from "../components/Main";
import LeftSide from "../components/LeftSide";

export default function Test() {
  const params = useParams()
  const idx = params.idx

  type DayWords = { words: string; meaning: string, idVocabulary: number}

  const [ words, setWords ] = useState<DayWords[]>([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/words/'+idx, {params: {
      idx: idx
    }})
    .then((res) => {
      setWords(res.data.sort(() => Math.random() - 0.5))
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  const wordsDetail =
  words.map((words) => (
    <ContentWrap>
        <TestList key={words.idVocabulary}>
          <TestItem1>{words.words}</TestItem1>
          <TestItem2>{words.meaning}</TestItem2>
        </TestList>
        <InputContent>
          <Input />
        </InputContent>
    </ContentWrap>
  ))

  return (
    <Main>
      <LeftSide />
      <TestBase>
        <Inner>
          <TestContent>
            {wordsDetail}
            <span 
            style={{fontSize: "13px", display: "block", textAlign: "center", padding: "15px 0 0"}}>
              💯카드를 뒤집으면 정답이 보여요!
            </span>
          </TestContent>
        </Inner>
      </TestBase>
    </Main>
  )
}

const TestBase = styled.div`
`

const Inner = styled.div`
width: 700px;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`

const TestContent = styled.div`
width: 600px;
height: 90%;
background-color: #fff;
border-radius: 12px;
box-shadow : 5px 5px 8px -8px;
padding: 0 10px 20px;
`

const ContentWrap = styled.div`
display: flex;
&:first-child {
  margin-top: 10px;
}
`

const InputContent = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`

const Input = styled.input`
padding: 15px 30px;
border: none;
border-bottom: 1px solid #4D94E6;
`

const TestItem1 = styled.div`
position: absolute;
width: 200px;
height: 40px;
margin: 20px 0;
border: 1px solid #4D94E6;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
transform: rotateY(0deg);
backface-visibility: hidden;
`

const TestItem2 = styled.div`
background-color:#4D94E6;
position: absolute;
width: 200px;
height: 40px;
margin: 20px 0;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 12px; 
transform: rotateY(-180deg);
backface-visibility: hidden;
`

const TestList = styled.div`
flex: 1;
height: 60px;
font-size: 14px;
display: flex;
justify-content: center;
align-items: center;

&:hover {
  ${TestItem1} {
    transform: rotateY(180deg);
  }
  ${TestItem2} {
    transform: rotateY(0deg);
  }
`