import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components'
import axios from 'axios'
import { useParams, Link } from "react-router-dom";
import { Main } from "../components/Main";
import LeftSide from "../components/LeftSide";
import { DayWords, RootState, UserType } from "../types";

export default function Day() {
  const user = useSelector<RootState , UserType | null>((state) => state.auth.user)
  const params = useParams()
  const idx = params.idx

  const [ words, setWords ] = useState<DayWords[]>([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/words/'+idx, {params: {
      idx: idx
    }})
    .then((res) => {
      setWords(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  console.log(idx)

  const changeActive = () => {
    let idUser = user.idUser
    let reqData = {
      Day: idx,
      active: '학습 완료',
      idUser: idUser
    }
    axios.patch('http://localhost:3001/api/day', reqData)
    .then((res) => {
      console.log(res.data.msg)
    })
  }

  const wordsDetail =
  words.map((words) => (
    <WordsList key={words.idVocabulary}>
      <WordsItem>{words.words}</WordsItem>
      <WordsItem style={{fontSize: "13px"}}>{words.meaning}</WordsItem>
    </WordsList>
  ))

  return (
    <Main>
      <LeftSide />
      <DayBase>
        <Inner>
          <WordsContent>
            {wordsDetail}
            <BtnSection>
              <Link to={"/test/" + idx}>
                <TestBtn onClick={changeActive}>테스트하러 가기</TestBtn>
              </Link>
            </BtnSection>
          </WordsContent>
        </Inner>
      </DayBase>
    </Main>
  )
}

const DayBase = styled.div`
`

const Inner = styled.div`
width: 700px;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`

const WordsContent = styled.div`
width: 80%;
height: 95%;
background-color: #fff;
border-radius: 12px;
box-shadow : 5px 5px 8px -8px;
padding: 0 10px 20px;
`

const WordsList = styled.ul`
width: 100%;
font-size: 14px;
display: flex;
flex-wrap: wrap;
`

const WordsItem = styled.li`
width: 40%;
height: 40px;
padding: 0 30px;
margin: 20px auto 0;
border: 1px solid #4D94E6;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
`

const BtnSection = styled.div`
margin-top: 23px;
text-align: center;
`

const TestBtn = styled.button`
background-color: #4D94E6;
width: 40%;
margin: 0 auto;
display: block;
color: #fff;
padding: 15px 15px;
border-radius: 15px;
`