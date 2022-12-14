import React  from 'react';
import styled from 'styled-components';

interface ProfileProps {
  logout: () => void
}

const ProfileCard: React.FC<ProfileProps> = ({logout}) => {
  return (
    <ProfileCardBase>
      <ProfileImg>
        <img 
        src={`${process.env.PUBLIC_URL}/assets/penguin.png`} 
        alt='프로필사진' 
        style={{width: "90%", height: "90%"}}
        />
      </ProfileImg>
      <ProfileContent>
        <SpanWrap>
          <span>Lv. </span>
          <span style={{marginRight: '5px'}}>1 </span>
          <span>쌀구</span>
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
background-color: #4D94E6;
color: #fff;
font-size: 13px;
`