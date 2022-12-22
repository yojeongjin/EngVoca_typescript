import React from 'react';
import styled from 'styled-components';
import { UserType } from '../types';

interface ProfileProps {
  logout: () => void
  user: UserType
  editHandler: () => void
}

const ProfileCard: React.FC<ProfileProps> = ({logout, user, editHandler}) => {
  return (
    <ProfileCardBase>
      <ProfileImg>
        <img 
        src={user.UserImg} 
        alt='프로필사진' 
        style={{width: "90%", height: "90%"}}
        />
      </ProfileImg>
      <ProfileContent>
        <SpanWrap>
          <EditWrap>
            <span>{user.UserName}</span>
            <EditBtn 
            onClick={editHandler}
            type='button'>
              수정
            </EditBtn>
          </EditWrap>
        </SpanWrap>
        <SpanWrap style={{fontWeight: "300", fontSize: "13px", color: "#555"}}>
          <span>{user.UserEmail}</span>
        </SpanWrap>
        <Logout onClick={logout}>로그아웃</Logout>
      </ProfileContent>
    </ProfileCardBase>
  )
}

export default ProfileCard

const ProfileCardBase = styled.div`
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
const ProfileImg = styled.div`
width: 100px;
height: 100px;
margin-right: 20px;
border-radius: 20px;
background-color: #ddd;
display: flex;
align-items: center;
justify-content: center;
`

const SpanWrap = styled.div`
font-size: 15px;
padding: 0 6px;
`
const ProfileContent = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const Logout = styled.button`
padding: 10px;
width: 100%;
border-radius: 10px;
background-color: ${(props) => props.theme.mainColor};
color: #fff;
font-size: 13px;
`

const EditBtn = styled.button`
font-size: 12px;
font-weight: 300;
color: #555;
padding: 0 7px;

@media ${props => props.theme.mobile} {
  padding-left: 15px;
}

`

const EditWrap = styled.div`

@media ${props => props.theme.desktop} {
  display: flex;
  justify-content: space-between;
}

`