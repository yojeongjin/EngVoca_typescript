import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LoginReqType } from '../types';

interface SigninProps {
  login: (req: LoginReqType) => void
}

const Signin: React.FC<SigninProps> = ({login}) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const pwRef = useRef<HTMLInputElement>(null)

  const signinHandler = () => {
    const email = emailRef.current!.value
    const password = pwRef.current!.value

    login({email, password})
  }

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      signinHandler()
    }
  }

  return (
    <SigninBase>
      <Inner>
        <SigninContent>
          <SigninTitle style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <img 
            src={`${process.env.PUBLIC_URL}/assets/small-logo.webp`} alt='로고' 
            style={{width:"40%", height: "50%"}}
            />
            <p style={{color: '#34314c', fontSize: '13px'}}>로그인이 필요한 서비스입니다.</p>
          </SigninTitle>
          <InputWrap style={{marginTop: "20px"}}>
            <InputLabel htmlFor="emailInput"><em style={{color: "red", marginRight: "2px",   verticalAlign: "-2px"}}>*</em>이메일</InputLabel>
            <Input 
            type="email"
            id="emailInput"
            placeholder="이메일을 입력해주세요."
            ref={emailRef}
            />
          </InputWrap>
          <InputWrap>
            <InputLabel htmlFor="pwInput"><em style={{color: "red", marginRight: "2px",   verticalAlign: "-2px"}}>*</em>비밀번호</InputLabel>
            <Input 
            type="password"
            id="pwInput"
            placeholder="비밀번호를 입력해주세요."
            ref={pwRef}
            onKeyPress={handleOnKeyPress}
            />
          </InputWrap>

          <BtnWrap>
            <Button onClick={signinHandler}>로그인</Button>
            <Link to="/join">
              <Button
              style={{backgroundColor: "transparent", border: "1px solid #4d94e6", color: "#4d94e6"}}
              >회원가입</Button>
            </Link>
          </BtnWrap>
        </SigninContent>

      </Inner>
    </SigninBase>
  )
}

export default Signin

const SigninBase = styled.div`
`

const Inner = styled.div `
width: 1300px;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media ${props => props.theme.mobile} {
  width: 370px;
}
`

const SigninContent = styled.div`
background-color: #fff;
width: 370px;
height: 500px;
margin-top: 50px;
border-radius: 12px;
box-shadow : 5px 5px 10px -5px;
`

const SigninTitle = styled.div`
margin-top: 15px;
`

const InputWrap = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Input = styled.input`
margin-top: 30px;
width: 300px;
border: 1px solid #dddddd;
border-radius: 8px;
padding: 16px;
font-size: 14px;
&:focus {
  border-color: #34314c;
  background-color: #fff;
}
`

const InputLabel = styled.label`
display: inline-block;
position: absolute;
top: 18px;
left: 54px;
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
margin-top: 30px;
`

const Button = styled.button`
width: 300px;
padding: 15px 0;
margin-top: 15px;
font-size: 14px;
border-radius: 8px;
background-color: ${(props) => props.theme.mainColor};
color: #fff;
`