import React  from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProfileContainer from '../containers/ProfileContainer';

export default function LeftSide() {
  return (
    <LeftSideBase>
      <Link to="/">
        <Logo>
          <img src={`${process.env.PUBLIC_URL}/assets/vocalogo.webp`} alt='로고' />
        </Logo>
      </Link>
      <ProfileContainer />

      <Nav>
        <NavItem>
          <img 
          src={`${process.env.PUBLIC_URL}/assets/studyicon.png`} 
          alt='아이콘'
          style={{marginRight: "10px"}}
          />
          유형별 학습하기
        </NavItem>
        <NavItem>
          <img 
          src={`${process.env.PUBLIC_URL}/assets/quizicon.png`} 
          alt='아이콘'
          style={{marginRight: "10px"}}
          />
          복습 퀴즈 풀기
        </NavItem>
        <Link to="/notebook">
          <NavItem>
            <img 
            src={`${process.env.PUBLIC_URL}/assets/noteicon.png`} 
            alt='아이콘'
            style={{marginRight: "10px"}}
            />
            단어장 보러가기
          </NavItem>
        </Link>
      </Nav>
    </LeftSideBase>
  )
}

const LeftSideBase = styled.div`
position: fixed;
top: 0;
left: 0;
width: 400px;
height: 100vh;
background-color: #d9e1e8;
font-family: 'AppleSDGothicNeo';
font-weight: 500;
`

const Logo = styled.div`
margin-top: 15px;
display: flex;
align-items: center;
justify-content: center;
> img {
  width: 40%;
  height: 40%;
}
`

const Nav = styled.ul`
width: 80%;
margin: 20px auto 0;
font-size: 14px;
`

const NavItem = styled.li`
width: 100%;
height: 45px;
padding: 0 30px;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: start;
background-color: #fff;
border-radius: 15px;
`