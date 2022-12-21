import React, { Dispatch,SetStateAction, ReactNode }  from "react";
import styled from "styled-components";

interface ModalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({children, setOpenModal}) => {

  const closeModal = () => {
    setOpenModal(false) 
  }

  return (
    <ModalBase>
      <ModalTitle>
        <CloseBtn onClick={closeModal}> X </CloseBtn>
      </ModalTitle>
      {children}
    </ModalBase>
  )
}

export default Modal


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
z-index: 999;
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