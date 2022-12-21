import React, { useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { ModiReqType, UserType } from "../types";

interface EditProfileProps {
  user: UserType
  editContent: (req: ModiReqType) => void
}

const EditProfile: React.FC<EditProfileProps> = ({user, editContent}) => {
  let idUser = user.idUser
  const [ img, setImg ] = useState(user.UserImg)
  const [ name, setName ] = useState(user.UserName)

  const profileImgs = [
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

  const refresh = useCallback(() => {
    const idx = Math.floor(Math.random() * profileImgs.length)
    setImg(profileImgs[idx])

  },[img])

  const clickHandler = () => {
    editContent({name, img, idUser})
  }

  return (
    <EditBase>
      <EditImg>
        <FlipBtn onClick={refresh}>
          <img src={`${process.env.PUBLIC_URL}/assets/flipicon.png`} alt='변경 아이콘'/>
        </FlipBtn>
        <img 
        src={img} 
        alt='프로필사진' 
        style={{width: "90%", height: "90%"}}
        />
      </EditImg>
      <EditContent>
        <ContentWrap  style={{display: "flex", justifyContent: "space-between"}}>
          <EditInput 
          value={name} 
          onChange={(e)=>{setName(e.target.value)}}
          />
          <button
          onClick={clickHandler}
          type='button'
          style={{fontSize:"12px", fontWeight: "300", color: "#555", padding:"0 7px", textDecoration: "underline"}}>
            수정
          </button>
        </ContentWrap>
        <ContentWrap style={{fontWeight: "400", color: "#555"}}>
          <span>{user.UserEmail}</span>
        </ContentWrap>
        <Logout disabled>로그아웃</Logout>
      </EditContent>
    </EditBase>
  )
}

export default EditProfile

const EditBase = styled.div`
width: 80%;
padding: 20px;
display: flex;
border-radius: 20px;
margin: 30px auto 0;
background-color: #fff;
font-size: 14px;


@media ${props => props.theme.mobile} {
  width: 370px;
}
`

const EditImg = styled.div`
position: relative;
width: 100px;
height: 100px;
margin-right: 20px;
border-radius: 20px;
background-color: #ddd;
display: flex;
align-items: center;
justify-content: center;
`

const FlipBtn = styled.button`
position: absolute;
top: -8px;
right: -8px;
`

const EditContent = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const ContentWrap = styled.div`
font-size: 15px;
padding: 0 6px;
`

const EditInput = styled.input`
width: 70%;
`

const Logout = styled.button`
padding: 10px;
width: 100%;
border-radius: 10px;
background-color: #ddd;
color: #333;
font-size: 13px;
cursor: default;
`