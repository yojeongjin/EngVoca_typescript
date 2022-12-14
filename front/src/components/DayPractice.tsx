import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ActiveReqType } from '../types';

interface DayProps {
  dayData: any[] | null
  changeActive: (reqData: ActiveReqType) => void
  idUser: number
}

const DayPractice: React.FC<DayProps> = ({dayData, changeActive, idUser}) => {

  const changeHandler = (Day: any) => {
    const active = '학습 진행 중💪🏻'
    changeActive({Day, active, idUser})
  }

  const dayDetail =
  dayData.map((day) => {
    return <Link to={"/day/" + day[0]} key={day[0]}>
      {
        day[1] === '학습 완료✨' ?
        <PracticeItem onClick={() => {changeHandler(day[0])}}
        style={{backgroundColor: "#eee", border: "1px solid #eee", color: "#333"}}>
          {day[0]}
          <Active style={{color: "#333"}}>{day[1]}</Active>
        </PracticeItem>
        :
        <PracticeItem onClick={() => {changeHandler(day[0])}}>
          {day[0]}
          <Active>{day[1]}</Active>
        </PracticeItem>
      }
    </Link>
  })

  return (
    <DayPracticeBase>
      <Inner>
        <DayContent>
          <PracticeList>
            {dayDetail}
          </PracticeList>
        </DayContent>
      </Inner>
    </DayPracticeBase>
  )
}

export default DayPractice

const DayPracticeBase = styled.div`
font-size: 14px;
color: #252525;
`

const Inner = styled.div`
width: 700px;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;

@media ${props => props.theme.mobile} {
  width: 370px;
  height: calc(var(--vh, 1vh) * 100);
}
`

const DayContent = styled.div`
width: 80%;
height: 80%;
background-color: #fff;
border-radius: 12px;
box-shadow : 5px 5px 8px -8px;
padding: 0 10px 20px;
overflow-y: scroll;

@media ${props => props.theme.mobile} {
  width: 100%;
  height: 65%;
}
`
const PracticeList = styled.ul`
width: 100%;
display: flex;
flex-wrap: wrap;
display: flex;
justify-content: center;
align-items: center;
`

const Active = styled.span`
font-size: 11px;
display: block;
color: ${(props) => props.theme.mainColor};
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
  background-color: ${(props) => props.theme.mainColor};
  color: #fff;
  ${Active} {
    color: #fff;
  }
}
`