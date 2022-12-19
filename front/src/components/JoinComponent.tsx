import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { JoinReqType } from '../types'
import axios from 'axios'
import { useCallback } from 'react'

interface JoinProps {
  join: (reqData: JoinReqType) => void
}

const JoinComponent: React.FC<JoinProps> = ({join}) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  const [ isCheck, setIsCheck ] = useState(false)
  const [ isCheckPw, setIsCheckPw ] = useState(false)
  const [ pw, setPw ] = useState('')
  const [ rePw, setRepw ] = useState('')
  const [ checkPw, setCheckPw ] = useState('')

  const profileImg = [
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/hare.webp',
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/bear.webp',
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/chicken.webp',
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/fox.webp',
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/giraffe.webp',
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/alpaca.webp',
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/antelope.webp',
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/monkey.webp',
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/polar-bear.webp',
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/kangaroo.webp'
  ]

  const changeHandler = useCallback(
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepw(e.target.value)

    if(pw === e.target.value) {
      setCheckPw('🙆🏻‍♀️ 일치합니다.')
      setIsCheckPw(true)
    } else {
      setCheckPw('🙅🏻‍♀️ 일치하지 않습니다.')
      setIsCheckPw(false)
    }
  },[pw, rePw])

  const joinHandler = () => {
    let su = Math.random() * 1000
    let pick = Math.round(su % 3)

    const email = emailRef.current!.value
    const password = pw
    const repassword = rePw
    const name = nameRef.current!.value
    const img = profileImg[pick]

    if(isCheck === false) {
      alert('이메일 중복확인을 해주세요.')
    }

    join({email, password, repassword, name, img})
  }

  const checkHandler = async () => {
    const email = emailRef.current!.value
    try {
      const res = await axios.get(
        'http://localhost:3001/api/join', {params: { 
          email: email }
        })
        if(res.data.code === 400) {
          alert(res.data.msg)
        } else {
          alert(res.data.msg)
          setIsCheck(true)
        }
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <JoinBase>
      <Inner>
        <JoinNav>
          <Link to="/">
            <JoinTitle>
              <img 
              src={`${process.env.PUBLIC_URL}/assets/vocalogo.webp`} alt='로고' 
              style={{width:"50%", height: "50%"}}
              />
            </JoinTitle>
          </Link>
        </JoinNav>

        <JoinContent>
          <JoinTitle style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <img 
            src={`${process.env.PUBLIC_URL}/assets/small-logo.webp`} alt='로고' 
            style={{width:"40%", height: "50%"}}
            />
          </JoinTitle>

          <InputWrap style={{marginTop: "10px"}}>
            <InputLabel htmlFor="emailInput"><em style={{color: "red", marginRight: "2px",   verticalAlign: "-2px"}}>*</em>이메일</InputLabel>
            <Input 
            type="email"
            id="emailInput"
            placeholder="이메일을 입력해주세요."
            ref={emailRef}
            />

            <ContentWrap onClick={checkHandler} isCheck={isCheck === true}>
              이메일 중복확인
            </ContentWrap>
          </InputWrap>

          <InputWrap style={{marginTop: "10px"}}>
            <InputLabel htmlFor="emailInput"><em style={{color: "red", marginRight: "2px",   verticalAlign: "-2px"}}>*</em>비밀번호</InputLabel>
            <Input 
            type="password"
            id="emailInput"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {setPw(e.target.value)}}
            />
          </InputWrap>

          <InputWrap style={{marginTop: "10px"}}>
            <InputLabel htmlFor="emailInput"><em style={{color: "red", marginRight: "2px",   verticalAlign: "-2px"}}>*</em>비밀번호 확인</InputLabel>
            <Input 
            type="password"
            id="emailInput"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {changeHandler(e)}}
            />
            <PwCheck isCheckPw={isCheckPw === true}>
              {checkPw}
            </PwCheck>
          </InputWrap>

          <InputWrap style={{marginTop: "10px"}}>
            <InputLabel htmlFor="emailInput"><em style={{color: "red", marginRight: "2px",   verticalAlign: "-2px"}}>*</em>닉네임</InputLabel>
            <Input 
            type="text"
            id="nameInput"
            placeholder="닉네임을 입력해주세요."
            ref={nameRef}
            />
          </InputWrap>

          <BtnWrap>
            <Button onClick={joinHandler}>회원가입</Button>
          </BtnWrap>
        </JoinContent>
      </Inner>
    </JoinBase>
  )
}

export default JoinComponent

const JoinBase = styled.div`

`
const Inner = styled.div`
width: 1300px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const JoinNav = styled.header`
width: 1200px;
margin: 0 auto;
display: flex;
align-items: center;
`

const JoinTitle = styled.div`
margin-top: 15px;
`

const JoinContent = styled.div`
background-color: #fff;
width: 400px;
border-radius: 12px;
box-shadow : 5px 5px 10px -5px;
`

const InputWrap = styled.div`
padding: 0 50px;
display: flex;
justify-content: flex-start;
flex-direction: column;
`

const Input = styled.input`
width: 300px;
border: 1px solid #dddddd;
border-radius: 8px;
padding: 12px;
font-size: 13px;
&:focus {
  border-color: #34314c;
}
`

const InputLabel = styled.label`
display: inline-block;
padding: 5px 10px;
background: white;
font-size: 12px;
color: #888;
`

const BtnWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 20px 0 40px;
`

const Button = styled.button`
width: 300px;
padding: 15px 0;
font-size: 14px;
border-radius: 8px;
background-color: #4D94E6;
color: #fff;
`

const ContentWrap = styled.div<{isCheck: boolean}>`
width: 100px;
padding: 7px 10px;
font-size: 12px;
cursor: ${(props) => props.isCheck ? "default" : "pointer"};
color: ${(props) => props.isCheck ? "#ddd" : "#4D94E6"};
text-decoration: ${(props) => props.isCheck ? "none" : "underline"};
`
const PwCheck = styled.div<{isCheckPw: boolean}>`
color: ${(props) => props.isCheckPw ? "#333" : "red"};
padding: 7px 10px;
font-size: 12px;
`