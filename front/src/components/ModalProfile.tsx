import React, { Dispatch,SetStateAction }  from "react";
import styled from "styled-components";

import ProfileContainer from "../containers/ProfileContainer";

interface ModalProps {
  setOpenProfile: Dispatch<SetStateAction<boolean>>
}

const ModalProfile: React.FC<ModalProps> = ({setOpenProfile}) => {

  const closeModal = () => {
    setOpenProfile(false) 
  }

  return (
    <ModalBase>
      <ModalTitle>
        <CloseBtn onClick={closeModal}> X </CloseBtn>
      </ModalTitle>
      <ProfileContainer />
    </ModalBase>
  )
}

export default ModalProfile


const ModalBase = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
z-index: 99;
background-color: rgba(0, 0, 0, 0.6);
`


const CloseBtn = styled.button`
position: absolute;
top: 20px;
right: 0;
padding: 6px 10px 5px;
border-radius: 50%;
background-color: #fff;
font-weight: bold;
color: ${(props) => props.theme.mainColor};
box-shadow : 2px 3px 8px #555;
`

const ModalTitle = styled.div`
position: relative;
width: 370px;
`