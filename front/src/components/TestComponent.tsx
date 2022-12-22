import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { DayType, SaveReqType, UserType } from "../types"
import { Main } from "./Main"
import save from "../assets/save.png"
import saved from "../assets/saved.png"
import { Desktop, Mobile } from "../hooks/useMediaQuery"

interface TestProps {
  user: UserType,
  saveWord: (saveData: SaveReqType) => void
  words: DayType[]
}

const TestComponent: React.FC<TestProps> = ({user, saveWord, words}) => {
  const [ word , setWord ] = useState<string>(null)
  const [ meaning, setMeaning ] = useState<string>(null)

  useEffect(() => {
    if (word === null && meaning === null) {
      return
    }
    let idUser = user.idUser

    saveWord({word,meaning,idUser})
  }, [saveWord, word, meaning])

  const handleClick = (idx:any) => {
    words[idx].isSave = true
    setWord(words[idx].words)
    setMeaning(words[idx].meaning)
  }

  const wordsDetail =
  words.map((word, idx) => {
    return (
      <ContentWrap key={word.idVocabulary}>
        <TestList>
          <TestItem1>{word.words}</TestItem1>
          <TestItem2>{word.meaning}</TestItem2>
        </TestList>
        <InputContent>
          <Input />
        </InputContent>
        <SaveContent onClick={()=>handleClick(idx)} >
          <SaveIcon isSave={word.isSave === true}></SaveIcon>
        </SaveContent>
      </ContentWrap>
    )
  })

  const mobileDetail =
  words.map((word, idx) => {
    return (
      <ContentWrap key={word.idVocabulary}>
        <TestList>
          <TestItem1>{word.words}</TestItem1>
          <TestItem2>{word.meaning}</TestItem2>
        </TestList>
        <SaveContent onClick={()=>handleClick(idx)} >
          <SaveIcon isSave={word.isSave === true}></SaveIcon>
        </SaveContent>
      </ContentWrap>
    )
  })

  return (
    <>
      <Desktop>
        <Main>
          <TestBase>
            <Inner>
              <TestContent>
                {wordsDetail}
                <span 
                style={{fontSize: "13px", display: "block", textAlign: "center", padding: "15px 0 0"}}>
                  🍋카드를 뒤집으면 정답이 보여요!
                </span>
              </TestContent>
            </Inner>
          </TestBase>
        </Main>
      </Desktop>

      <Mobile>
        <TestBase>
          <Inner>
            <TestContent>
              {mobileDetail}
              <span 
              style={{fontSize: "13px", display: "block", textAlign: "center", padding: "25px 0 0"}}>
                🍋카드를 뒤집으면 정답이 보여요!
              </span>
            </TestContent>
          </Inner>
        </TestBase>
      </Mobile>
    </>
  ) 
}

export default TestComponent

const TestBase = styled.div`
font-size: 14px;
color: #333;
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

const TestContent = styled.div`
width: 600px;
height: 90%;
background-color: #fff;
border-radius: 12px;
box-shadow : 5px 5px 8px -8px;
padding: 0 10px 20px;

@media ${props => props.theme.mobile} {
  width: 90%;
  height: 85%;
  overflow-y: scroll;
}
`

const ContentWrap = styled.div`
display: flex;
&:first-child {
  margin-top: 10px;
}
@media ${props => props.theme.mobile} {
  width: 100%;
  height: 50px;
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

@media ${props => props.theme.mobile} {
  height: 40px;
}
`

const TestItem2 = styled.div`
background-color: ${(props) => props.theme.mainColor};
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

@media ${props => props.theme.mobile} {
  height: 40px;
}
`

const TestList = styled.div`
flex: 1;
height: 60px;
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

const SaveContent = styled.div`
width: 10%;
display: flex;
justify-content: center;
align-items: center;
`

const SaveIcon = styled.button<{isSave:boolean}>`
width: 24px;
height: 24px;
background-image: ${(props) => props.isSave ? `url(${saved})` : `url(${save})`};

@media ${props => props.theme.mobile} {
  width: 20px;
  height: 20px;
  background-size: cover;
}
`