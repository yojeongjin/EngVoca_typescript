import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Main } from './Main';

const EachTypeList: React.FC = () => {

  return(
    <Main>
      <EachTypeBase>
        <Inner>
          <ContetnWrap>
            <Link to="/basic">
              <Content>
                <img style={{marginBottom: "10px"}}
                src={`${process.env.PUBLIC_URL}/assets/dictionary.png`} alt='로고' />
                기본 완성
              </Content>
            </Link>
            <Link to="/LCRC">
              <Content>
                <img style={{marginBottom: "10px"}}
                src={`${process.env.PUBLIC_URL}/assets/audio-book.png`} alt='로고' />
                필수 LC/RC 단어
              </Content>
            </Link>
            <Link to="/700">
              <Content>
                <img style={{marginBottom: "10px"}}
                src={`${process.env.PUBLIC_URL}/assets/700score.png`} alt='로고' />
                도전! 700점 완성
              </Content>
            </Link>
            <Link to="/800">
              <Content>
                <img style={{marginBottom: "10px"}}
                src={`${process.env.PUBLIC_URL}/assets/800score.png`} alt='로고' />
                도전! 800점 완성
              </Content>
            </Link>
            <Link to="/900">
              <Content>
                <img style={{marginBottom: "10px"}}
                src={`${process.env.PUBLIC_URL}/assets/900score.png`} alt='로고' />
                도전! 900점 완성
              </Content>
            </Link>
          </ContetnWrap>
        </Inner>
      </EachTypeBase>
    </Main>
  )
}

export default EachTypeList

const EachTypeBase = styled.div`
font-size: 14px;
font-weight: bold;
color: #34314c;
`

const Inner = styled.div`
width: 1000px;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`

const ContentMove = keyframes`
0%,100%{
  transform:translate(0,-5%);
}
50%{
  transform:translate(0, -10%);
  box-shadow: 0 0 30px #4D94E6;
}
`

const Content = styled.div`
margin: 0 10px;
width: 280px;
height: 200px;
background-color: #fff;
border-radius: 12px;
box-shadow : 5px 5px 8px -8px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
&:hover {
  animation: ${ContentMove} 1.5s infinite linear;
}
`
const ContetnWrap = styled.div`
display: flex;
flex-wrap: wrap;
width: 900px;
height: 80%;
`
