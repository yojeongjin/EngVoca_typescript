import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from './Modal';

const BottomNav: React.FC = () => {
  const [ openProfile, setOpenProfile ] = useState<boolean>(false)

  const showModal = () => {
    setOpenProfile(true)
  }
  return (
    <BottomBase>
      <BottomNavList>

        <BottomNavLink>
          <Link to="/">
            <img 
            style={{marginTop: "10px"}}
            src={`${process.env.PUBLIC_URL}/assets/homeicon.png`} 
            alt='아이콘' />
          </Link>
        </BottomNavLink>

        <BottomNavLink onClick={showModal}>
          <img 
          style={{marginTop: "10px"}}
          src={`${process.env.PUBLIC_URL}/assets/profileicon.png`} 
          alt='아이콘' />
        </BottomNavLink>

        <BottomNavLink>
          <Link to="/eachtype">
            <img 
            style={{marginTop: "10px"}}
            src={`${process.env.PUBLIC_URL}/assets/stepicon.png`} 
            alt='아이콘' />
          </Link>
        </BottomNavLink>

        <BottomNavLink>
          <Link to="/repeat">
            <img 
            style={{marginTop: "10px"}}
            src={`${process.env.PUBLIC_URL}/assets/quizicon.png`} 
            alt='아이콘'
            />
          </Link>
        </BottomNavLink>

        <BottomNavLink>
          <Link to="/notebook">
            <img 
            style={{marginTop: "10px"}}
            src={`${process.env.PUBLIC_URL}/assets/noteicon.png`} 
            alt='아이콘'
            />
          </Link>
        </BottomNavLink>
      </BottomNavList>
      {openProfile && <Modal setOpenProfile={setOpenProfile} />}
    </BottomBase>
  )
}

export default BottomNav

const BottomBase = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 45px;
background-color: #d9e1e8;
display: flex;
justify-content: center;
align-items: center;
`

const BottomNavList = styled.nav`
width: 360px;
border-top: 1px solid #ddd;
`

const BottomNavLink = styled.div`
float: left;
width: 20%;
text-align: center;
height: 45px;
line-height: 45px;
`