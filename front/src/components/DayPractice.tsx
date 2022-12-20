import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ActiveReqType } from '../types';
import { Main } from './Main';


interface DayProps {
  dayData: any[] | null
  changeActive: (reqData: ActiveReqType) => void
  idUser: number
}

const DayPractice: React.FC<DayProps> = ({dayData, changeActive, idUser}) => {

  const changeHandler = (Day: any) => {
    const active = '학습 진행 중'
    changeActive({Day, active, idUser})
  }
  
  const dayDetail =
  dayData.map((day) => (
    <Link to={"/day/" + day[0]}>
      {
        day[1] === '학습 완료' ?
        <PracticeItem onClick={() => {changeHandler(day[0])}}
        style={{backgroundColor: "#eee", border: "1px solid #eee", color: "#333"}}>
          {day[0]}
          <Active style={{color: "#333"}}>{day[1]}</Active>
        </PracticeItem>
        :
        <PracticeItem onClick={() => {changeHandler(day[0])}}>
          {day[0]}
          <Active>{day[1] === 'null' ? '' : day[1]}</Active>
        </PracticeItem>
      }
    </Link>
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
display: flex;
justify-content: center;
align-items: center;
`

const Active = styled.span`
font-size: 11px;
display: block;
color: #4D94E6;
`

const PracticeItem = styled.li`
width: 150px;
height: 50px;
padding: 0 30px;
margin: 20px 8px 0;
border: 1px solid #4D94E6;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

&:hover {
  background-color: #4D94E6;
  color: #fff;
  ${Active} {
    color: #fff;
  }
}
`