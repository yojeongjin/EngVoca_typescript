import React from 'react';
import styled from 'styled-components';
import { DayType } from '../types';
import { Main } from './Main';

interface DayProps {
  dayData: DayType[] | null
}


const DayPractice: React.FC<DayProps> = ({dayData}) => {

  const dayDetail = 
  dayData?.map((day) => (
    <>
      <PracticeItem>Day {day.idDay}
        <span style={{fontSize: "11px"}}>{day.DayActive}</span>
      </PracticeItem>
    </>
  ))

  return (
    <Main>
      <DayPracticeBase>
        <Inner>
          <DayContent>
            <PracticeList>
              {dayDetail}
            </PracticeList>
          </DayContent>
        </Inner>
      </DayPracticeBase>
    </Main>
  )
}

export default DayPractice

const DayPracticeBase = styled.div`
font-family: 'AppleSDGothicNeo';
font-weight: 500;
height: 100vh;
`

const Inner = styled.div`
width: 700px;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`

const DayContent = styled.div`
width: 80%;
height: 80%;
background-color: #fff;
border-radius: 12px;
box-shadow : 5px 5px 8px -8px;
padding: 0 10px 20px;
overflow-y: scroll;

`
const PracticeList = styled.ul`
width: 100%;
font-size: 14px;
display: flex;
flex-wrap: wrap;
`

const PracticeItem = styled.li`
width: 30%;
height: 50px;
padding: 0 30px;
margin: 20px auto 0;
border: 1px solid #4D94E6;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`