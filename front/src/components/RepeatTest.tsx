import React, { useEffect, useState, useRef }  from 'react'

import styled from 'styled-components'
import { Main } from './Main'

const RepeatTest: React.FC = () => {
  const [ answer, setAnswer ] = useState('')
  const [ count, setCount ] = useState(3)
  const [ timer, setTimer ] = useState<number>(0)
  const [ countCheck , setCountCheck ] = useState<boolean>(false)
  const [ stage, setStage ] = useState(0)
  const [ vocaList, setVocaList ] = useState('voca[0]')

  const countId = useRef(null)
  const timerId = useRef(null)

  const voca = ['somang', 'dangdong', 'dingdong']
  const answerList = []

  useEffect(() => {
    countId.current = setInterval(() => {
      setCount(count - 1)
    }, 1000)
    return () => clearInterval(countId.current)
  },[count])

  useEffect(() => {
    if (count <= 0) {
      clearInterval(countId.current)
      setCountCheck(true)
      setTimer(5)
    }
  },[count])
  
  useEffect(() => {
    timerId.current = setInterval(() => {
      setTimer(timer - 1)
    }, 1000)
    return () => clearInterval(timerId.current)
  },[timer])

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timerId.current)
      nextStage()
    }
  },[timer])

  const nextStage = () => {
    answerList.push(answer)
    setAnswer('')
    setTimer(5)
    setStage(stage + 1)
    setVocaList(voca[stage])
  }

  return (
    <Main>
      <RepeatTestBase>
        <Inner>
          {
            countCheck !== true &&
            <div style={{flexDirection: "column", position: "relative"}}>
              <img style={{width: "100px", position: "absolute", top: "-50px", right: "5px"}}
              src={`${process.env.PUBLIC_URL}/assets/mortarboard.webp`} 
              alt="모자" />
              <CountContent>{count}</CountContent>
            </div>
          }
          {
            countCheck &&
            <RepeatContent>
              <Timer>{timer}</Timer>
              <QandASection>
                <QuestionSection>
                  {vocaList}
                </QuestionSection>
              </QandASection>
              <QandASection>
                <AnswerInput 
                placeholder='정답을 입력해주세요.'
                onChange={(e)=>setAnswer(e.target.value)}
                />
              </QandASection>
            </RepeatContent>
          }
        </Inner>
      </RepeatTestBase>
    </Main>

  )
}


export default RepeatTest

const RepeatTestBase = styled.div`
`

const Inner = styled.div`
width: 700px;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`

const CountContent = styled.div`
width: 135px;
height: 135px;
font-size: 45px;
font-weight: bold;
color: #4D94E6;
border-radius: 50%;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
`

const RepeatContent = styled.div`
position: relative;
width: 500px;
height: 400px;
background-color: #fff;
border-radius: 12px;
box-shadow : 5px 5px 8px -8px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const QandASection = styled.div`
width: 300px;
height: 50px;
margin: 40px 0;

`

const QuestionSection = styled.div`
width: 100%;
height: 100%;
background-color: #4D94E6;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
border-radius: 12px;
`

const AnswerInput = styled.input`
width: 100%;
height: 30px;
padding: 5px 15px;
border: none;
border-bottom: 1px solid #4D94E6;
`

const Timer = styled.div`
position: absolute;
background-color: #e1eef6;
color: #ff5f2e;
font-weight: bold;
top: 20px;
right: 30px;
width: 33px;
height: 33px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
`