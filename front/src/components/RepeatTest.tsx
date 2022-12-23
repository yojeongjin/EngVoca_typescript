import React, { useEffect, useState, useRef }  from 'react'
import styled from 'styled-components'
import { TestType } from '../types'

interface RepeatProps{
 test: TestType[]
}

const RepeatTest: React.FC<RepeatProps> = ({test}) => {
  const [ answer, setAnswer ] = useState('')
  const [ answerList, setAnswerList ] = useState([])
  const [ count, setCount ] = useState(3)
  const [ timer, setTimer ] = useState(0)
  const [ stage, setStage ] = useState(0)
  const [ vocaList, setVocaList ] = useState('')
  const [ testStart, setTestStart ] = useState<boolean>(true)
  const [ countCheck , setCountCheck ] = useState<boolean>(false)
  const [ testEnd, setTestEnd ] = useState<boolean>(false)

  const getVoca = test.map((test) => {
    return (test.voca)
  })

  const inputRef = useRef<HTMLInputElement>(null)
  const countId = useRef(null)
  const timerId = useRef(null)

  useEffect(() => {
    countId.current = setInterval(() => {
      setCount(count - 1)
    }, 1000)
    return () => clearInterval(countId.current)
  },[count])

  useEffect(() => {
    if (count <= 0) {
      clearInterval(countId.current)
      setTestStart(false)
      setCountCheck(true)
      setTimer(5)
      setVocaList(getVoca[0])
    }
  },[count])
  
  useEffect(() => {
    if(inputRef.current !== null) {
      inputRef.current.focus()
    }
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
    setAnswerList([...answerList, answer])
    setAnswer('')
    setTimer(5)
    setStage(stage + 1)
    setVocaList(getVoca[stage])
  }

  useEffect(() => {
    if(answerList.length === 11){
      setCountCheck(false)
      setTestEnd(true)
      clearInterval(timerId.current)
    }
  },[answerList])

  const handleOnClick = () => {
    nextStage()
  }

  const handleOnKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      return handleOnClick()
    }
  }
  
  const answerWord = 
  test.map((test) => {
    return <WordItem key={test.idAllVoca}>{test.voca}</WordItem>
  })

  const answerMeaning = 
  test.map((test) => {
    return <WordItem key={test.idAllVoca}>{test.meaning}</WordItem>
  })

  const myAnswer = 
  answerList.map((answer) => {
    return <WordItem>{answer}</WordItem>
  })

  return (
    <RepeatTestBase>
      <Inner>
        {
          testStart &&
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
              ref={inputRef}
              placeholder='정답을 입력해주세요.'
              value={answer}
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setAnswer(e.target.value)}
              onKeyPress={handleOnKeyPress}
              />
              <AnswerBtn onClick={handleOnClick} type="button">
                <img 
                style={{width: "20px", height:"20px"}}
                src={`${process.env.PUBLIC_URL}/assets/sendicon.png`} alt="전송아이콘" />
              </AnswerBtn>
            </QandASection>
          </RepeatContent>
        }
        {
          testEnd &&
          <RepeatContent style={{width: "700px", height: "500px", flexDirection: "row"}}>
            <SubTitle>💌 나의 답안지 💌</SubTitle>
            <AnswerList>
              <WordList>
                {answerWord}
              </WordList>
            </AnswerList>

            <AnswerList>
              <WordList>
                {answerMeaning}
              </WordList>
            </AnswerList>

            <AnswerList style={{backgroundColor:"#fff"}}>
              <AnserItem>
                <WordList>
                  {myAnswer}
                </WordList>
              </AnserItem>
            </AnswerList>
          </RepeatContent>
        }
      </Inner>
    </RepeatTestBase>
  )
}


export default RepeatTest

const RepeatTestBase = styled.div`
font-size: 13px;
color: #252525;
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
  height: calc(var(--vh, 1vh) * 100);
}
`

const CountContent = styled.div`
width: 135px;
height: 135px;
font-size: 45px;
font-weight: bold;
color: ${(props) => props.theme.mainColor};
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
z-index: -10;
`

const QandASection = styled.div`
display: flex;
position: relative;
width: 300px;
height: 50px;
margin: 40px 0;
`

const QuestionSection = styled.div`
width: 100%;
height: 100%;
background-color: ${(props) => props.theme.mainColor};
display: flex;
justify-content: center;
align-items: center;
color: #fff;
border-radius: 12px;
`

const AnswerInput = styled.input`
width: 100%;
height: 30px;
padding: 5px 20px;
border: none;
border-bottom: 1px solid #4D94E6;
`

const AnswerBtn = styled.button`
position: absolute;
top: 5px;
right: 0;
cursor: pointer;
`

const Timer = styled.div`
position: absolute;
background-color: #e1eef6;
color: #ff5f2e;
font-weight: 500;
top: 20px;
right: 30px;
width: 33px;
height: 33px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
`

const AnswerList = styled.div`
flex: 1;
height: 100%;
background-color: #D4DFE6;
`

const WordList = styled.ul`
position: relative;
`

const WordItem = styled.li`
height: 50px;
border-bottom: 1px solid #eee;
display: flex;
justify-content: center;
align-items: center;
`

const AnserItem = styled.div`
position: absolute;
top: -50px;
width: 33.5%;
`

const SubTitle = styled.div`
position: absolute;
width: 232px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
box-shadow : 6px 0px 6px -8px;
top: -50px;
right: 0;

@media ${props => props.theme.mobile} {
  width: 123px;
}
`