import React, { useEffect, useState, } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ProfileContainer from '../containers/ProfileContainer';
import Modal from './Modal';

const BottomNav: React.FC = () => {
  const [ openModal, setOpenModal ] = useState<boolean>(false)
  const [ activeIdx, setActiveIdx ] = useState(0)
  const location = useLocation()

  const showModal = () => {
    setOpenModal(true)
  }
  useEffect(() => {
    if(location.pathname === '/') {
      setActiveIdx(15)
    } else if (location.pathname === '/eachtype') {
      setActiveIdx(155)
    } else if (location.pathname === '/repeat') {
      setActiveIdx(225)
    } else if (location.pathname === '/notebook') {
      setActiveIdx(295)
    }
  },[])

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

        <TubeLight activeIdx={activeIdx}>
          <Light></Light>
        </TubeLight>
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
background-color: #7f9eb2;
display: flex;
justify-content: center;
align-items: center;
`

const BottomNavList = styled.nav`
position: relative;
width: 360px;
`

const BottomNavLink = styled.div<{isActive: boolean}>`
float: left;
width: 20%;
text-align: center;
height: 45px;
line-height: 45px;
box-shadow: 0px 10px 5px -5px gray;
opacity: ${(props) =>  props.isActive ? '1' : '0.4'};
&:hover {
  scale: 1.2;
}
`

const TubeLight = styled.div<{activeIdx: number}>`
position: absolute;
left: ${(props) => props.activeIdx}px;
top: 0px;
width: 45px;
height: 5px;
border-radius: 5px;
background: #fff;
transition: left 400ms ease;
z-index: 10;
`

const Light = styled.div`
position: absolute;
left: -30%;
top: 5px;
width: 160%;
height: 80px;
clip-path: polygon(5% 100%, 25% 0px, 75% 0px, 95% 100%);
background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3) -50%, rgba(255, 255, 255, 0) 90%);
pointer-events: none;
`

const ImgWrap = styled.div`
cursor: pointer;
`