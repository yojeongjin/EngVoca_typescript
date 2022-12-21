import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import styled from "styled-components";

interface JoinAuthProps {
  emailAuth: string
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const JoinAuth: React.FC<JoinAuthProps> = ({emailAuth, setOpenModal}) => {
  const [ checkAuth, setCheckAuth ] = useState('')
  const [ isAuth, setIsAuth ] = useState(false)

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if(emailAuth === e.target.value) {
        setCheckAuth('🙆🏻‍♀️ 일치합니다.')
        setIsAuth(true)
        closeModal()
      } else {
        setCheckAuth('🙅🏻‍♀️ 일치하지 않습니다.')
        setIsAuth(false)
      }
  }, [])

  console.log(emailAuth)

  const closeModal = () => {
    setTimeout(() => {
      setOpenModal(false)
    },1000)
  }

  return (
    <JoinAuthBase>
      <Content>
        <AuthTitle>🔒 인증번호를 입력해주세요.</AuthTitle>
        <InputSection>
          <Input 
            type="number"
            id="authInput"
            onChange={changeHandler}
          />
          <AuthCheck isAuth={isAuth}>
            {checkAuth}
          </AuthCheck>
        </InputSection>
      </Content>
    </JoinAuthBase>
  )
}

export default JoinAuth

const JoinAuthBase = styled.div`
width: 400px;
padding: 20px;
display: flex;
border-radius: 20px;
margin: 30px auto 0;
background-color: #fff;
font-size: 14px;
display: flex;
align-items: center;
justify-content: center;
@media ${props => props.theme.mobile} {
  width: 370px;
}
`

const Content = styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const AuthTitle = styled.h1`

`

const InputSection = styled.div`
margin-top: 25px;
`
const Input = styled.input`
font-size: 13px;
border: 1px solid #dddddd;
border-radius: 8px;
padding: 6px;
-webkit-appearance: none;
margin: 0;
&:focus {
  border-color: ${props => props.theme.mainColor};
}
`

const AuthCheck = styled.div<{isAuth: boolean}>`
color: ${(props) => props.isAuth ? "#333" : "red"};
height: 15px;
padding: 0 5px;
font-size: 12px;
`