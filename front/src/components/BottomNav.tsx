import React, { useState, } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ProfileContainer from '../containers/ProfileContainer';
import Modal from './Modal';



const BottomNav: React.FC = () => {
  const [ openModal, setOpenModal ] = useState<boolean>(false)
  const location = useLocation()

  const showModal = () => {
    setOpenModal(true)
  }

  return (
    <BottomBase>
      <BottomNavList>

        <BottomNavLink isActive={location.pathname === '/'}>
          <Link to="/">
            <img 
            style={{marginTop: "10px"}}
            src={`${process.env.PUBLIC_URL}/assets/homeicon.png`} 
            alt='아이콘' />
          </Link>
        </BottomNavLink>

        <BottomNavLink isActive={openModal}>
          <ImgWrap onClick={showModal}>
            <img 
            style={{marginTop: "10px"}}
            src={`${process.env.PUBLIC_URL}/assets/profileicon.png`} 
            alt='아이콘' />
          </ImgWrap>
        </BottomNavLink>

        <BottomNavLink isActive={location.pathname === '/eachtype'}>
          <Link to="/eachtype">
            <img 
            style={{marginTop: "10px"}}
            src={`${process.env.PUBLIC_URL}/assets/stepicon.png`} 
            alt='아이콘' />
          </Link>
        </BottomNavLink>

        <BottomNavLink isActive={location.pathname === '/repeat'}>
          <Link to="/repeat">
            <img 
            style={{marginTop: "10px"}}
            src={`${process.env.PUBLIC_URL}/assets/quizicon.png`} 
            alt='아이콘'
            />
          </Link>
        </BottomNavLink>

        <BottomNavLink isActive={location.pathname === '/notebook'}>
          <Link to="/notebook">
            <img 
            style={{marginTop: "10px"}}
            src={`${process.env.PUBLIC_URL}/assets/noteicon.png`} 
            alt='아이콘'
            />
          </Link>
        </BottomNavLink>
      </BottomNavList>
      {openModal && 
      (<Modal setOpenModal={setOpenModal}>
        <ProfileContainer />
      </Modal>)
      }
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

const BottomNavLink = styled.div<{isActive: boolean}>`
float: left;
width: 20%;
text-align: center;
height: 45px;
line-height: 45px;
box-shadow: 0px 10px 5px -5px gray;
transform: translate(${(props) =>  props.isActive ? '0, -20%' : '0, 0'});
&:hover {
  scale: 1.2;
}
`

const ImgWrap = styled.div`
cursor: pointer;
`