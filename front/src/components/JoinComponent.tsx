import React, { useState, useRef, useCallback } from 'react'
import styled from 'styled-components'
import { JoinReqType } from '../types'
import axios from 'axios'
import Modal from './Modal'
import JoinAuth from './JoinAuth'

interface JoinProps {
  join: (reqData: JoinReqType) => void
}

const JoinComponent: React.FC<JoinProps> = ({join}) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  const [ isCheck, setIsCheck ] = useState<boolean>(false)
  const [ isCheckPw, setIsCheckPw ] = useState<boolean>(false)
  const [ pw, setPw ] = useState<string>('')
  const [ rePw, setRepw ] = useState<string>('')
  const [ checkPw, setCheckPw ] = useState<string>('')
  const [ openModal, setOpenModal ] = useState<boolean>(false)
  const [ emailAuth, setEmailAuth ] = useState<string>('')

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
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/kangaroo.webp',
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/penguin.png'
  ]

  const changeHandler = useCallback(
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepw(e.target.value)

    if(pw === e.target.value) {
      setCheckPw('ππ»ββοΈ μΌμΉν©λλ€.')
      setIsCheckPw(true)
    } else {
      setCheckPw('ππ»ββοΈ μΌμΉνμ§ μμ΅λλ€.')
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
      alert('μ΄λ©μΌ μΈμ¦μ ν΄μ£ΌμΈμ.')
    }

    if (emailRef.current!.value === '') {
      return alert('μ΄λ©μΌμ μλ ₯ν΄μ£ΌμΈμ')
    } else if (pw === '') {
      return alert('λΉλ°λ²νΈλ₯Ό μλ ₯ν΄μ£ΌμΈμ') 
    } else if (rePw === '') {
      return alert('λΉλ°λ²νΈλ₯Ό νμΈν΄μ£ΌμΈμ') 
    } else if (nameRef.current!.value === '') {
      return alert('λλ€μμ μλ ₯ν΄μ£ΌμΈμ.')
    }

    
    join({email, password, repassword, name, img})
  }

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      joinHandler()
    }
  }

  const checkHandler = async () => {
    const email = emailRef.current!.value
    if(email === '') {
      return alert('μ΄λ©μΌμ μλ ₯ν΄μ£ΌμΈμ.')
    }
    try {
      const res = await axios.post(
        'http://15.165.206.3:3001/api/mail', {
          userEmail: email
        })
        if(res.data.code === 400) {
          alert('μ€λ₯κ° λ°μνμμ΅λλ€. λ€μ νλ² μλν΄μ£ΌμΈμ.')
          window.location.reload()
        } else {
          setEmailAuth(res.data.authcode)
          alert(res.data.msg)
          setIsCheck(true)
          setOpenModal(true)
        }
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <JoinBase>
      <Inner>
        <JoinContent>
          <JoinTitle style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <img 
            src={`${process.env.PUBLIC_URL}/assets/small-logo.webp`} alt='λ‘κ³ ' 
            style={{width:"40%", height: "50%"}}
            />
          </JoinTitle>

          <InputWrap style={{marginTop: "10px"}}>
            <InputLabel htmlFor="emailInput"><em style={{color: "red", marginRight: "2px",   verticalAlign: "-2px"}}>*</em>μ΄λ©μΌ</InputLabel>
            <Input 
            type="email"
            id="emailInput"
            placeholder="μ΄λ©μΌμ μλ ₯ν΄μ£ΌμΈμ."
            required
            ref={emailRef}
            />

            {
              isCheck ? 
              <ContentWrap isCheck={isCheck === true} disabled>
                μ΄λ©μΌ μΈμ¦νκΈ°
              </ContentWrap>
              :
              <ContentWrap onClick={checkHandler} isCheck={isCheck === true}>
                μ΄λ©μΌ μΈμ¦νκΈ°
              </ContentWrap>
            }
          </InputWrap>

          <InputWrap style={{marginTop: "10px"}}>
            <InputLabel htmlFor="emailInput"><em style={{color: "red", marginRight: "2px",   verticalAlign: "-2px"}}>*</em>λΉλ°λ²νΈ</InputLabel>
            <Input 
            type="password"
            id="emailInput"
            placeholder="λΉλ°λ²νΈλ₯Ό μλ ₯ν΄μ£ΌμΈμ."
            required
            onChange={(e) => {setPw(e.target.value)}}
            />
          </InputWrap>

          <InputWrap style={{marginTop: "10px"}}>
            <InputLabel htmlFor="emailInput"><em style={{color: "red", marginRight: "2px",   verticalAlign: "-2px"}}>*</em>λΉλ°λ²νΈ νμΈ</InputLabel>
            <Input 
            type="password"
            id="emailInput"
            placeholder="λΉλ°λ²νΈλ₯Ό μλ ₯ν΄μ£ΌμΈμ."
            required
            onChange={(e) => {changeHandler(e)}}
            />
            <PwCheck isCheckPw={isCheckPw}>
              {checkPw}
            </PwCheck>
          </InputWrap>

          <InputWrap style={{marginTop: "10px"}}>
            <InputLabel htmlFor="emailInput"><em style={{color: "red", marginRight: "2px",   verticalAlign: "-2px"}}>*</em>λλ€μ</InputLabel>
            <Input 
            type="text"
            id="nameInput"
            placeholder="λλ€μμ μλ ₯ν΄μ£ΌμΈμ."
            required
            ref={nameRef}
            onKeyPress={handleOnKeyPress}
            />
          </InputWrap>

          <BtnWrap>
            <Button onClick={joinHandler}>νμκ°μ</Button>
          </BtnWrap>
        </JoinContent>
      </Inner>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <JoinAuth emailAuth={emailAuth} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </JoinBase>
  )
}

export default JoinComponent

const JoinBase = styled.div`

`
const Inner = styled.div`
width: 1300px;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media ${props => props.theme.mobile} {
  width: 370px;
  height: calc(var(--vh, 1vh) * 100);
}
`

const JoinTitle = styled.div`
margin-top: 15px;
`

const JoinContent = styled.div`
background-color: #fff;
width: 400px;
border-radius: 12px;
box-shadow : 5px 5px 10px -5px;

@media ${props => props.theme.mobile} {
  width: 90%;
}
`

const InputWrap = styled.div`
padding: 0 50px;
display: flex;
justify-content: flex-start;
flex-direction: column;
@media ${props => props.theme.mobile} {
  padding: 0 15px;
}
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
background-color: ${(props) => props.theme.mainColor};
color: #fff;
`

const ContentWrap = styled.button<{isCheck: boolean}>`
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