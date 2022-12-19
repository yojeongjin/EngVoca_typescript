import React, { ReactNode }  from 'react';
import styled from 'styled-components';

interface MainProps {
  children: ReactNode
}

export const Main = ({children}:MainProps) => {

  return (
    <MainBase>
      {children}
    </MainBase>
  )
}



const MainBase = styled.div`
position: fixed;
top: 0;
right: 0;
width: calc(100vw - 400px);
height: 100vh;
`