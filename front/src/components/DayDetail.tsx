import React from "react"
import styled from "styled-components"
import { UpdateReqType, UserType, DayType } from "../types"
import { Main } from "./Main"
import { Link } from "react-router-dom"
import { Desktop, Mobile } from "../hooks/useMediaQuery"

interface DayDetailProps {
  user: UserType,
  modiActive: (updateData: UpdateReqType) =>  void
  words: DayType[]
  idx: string
}

const DayDetail: React.FC<DayDetailProps> = ({user, modiActive, words, idx}) => {
  const changeActive = () => {
    let Day = idx
    let active = '학습 완료✨'
    let idUser = user.idUser

    modiActive({Day, active, idUser})
  }

  const wordsDetail =
  words.map((words) => (
    <WordsList key={words.idVocabulary}>
      <WordsItem>{words.words}</WordsItem>
      <WordsItem style={{fontSize: "12px"}}>{words.meaning}</WordsItem>
    </WordsList>
  ))

  return(
    <>
      <Desktop>
        <Main>
          <DayDetailBase>
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
          </DayDetailBase>
        </Main>
      </Desktop>

      <Mobile>
        <DayDetailBase>
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
        </DayDetailBase>
      </Mobile>
    </>
  )
}

export default DayDetail

const DayDetailBase = styled.div`

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

const WordsContent = styled.div`
width: 80%;
height: 95%;
background-color: #fff;
border-radius: 12px;
box-shadow : 5px 5px 8px -8px;
padding: 0 10px 20px;

@media ${props => props.theme.mobile} {
  width: 90%;
  height: 65%;
  overflow-y: scroll;
}
`

const WordsList = styled.ul`
width: 100%;
font-size: 14px;
display: flex;
flex-wrap: wrap;

@media ${props => props.theme.mobile} {
  font-size: 12px;
}
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

@media ${props => props.theme.mobile} {
  padding: 0 15px;
}
`

const BtnSection = styled.div`
margin-top: 23px;
text-align: center;
`

const TestBtn = styled.button`
background-color: ${(props) => props.theme.mainColor};
width: 40%;
margin: 0 auto;
display: block;
color: #fff;
padding: 15px 15px;
border-radius: 15px;
`