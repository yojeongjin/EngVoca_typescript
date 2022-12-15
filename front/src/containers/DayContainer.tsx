import React from 'react';
import { useSelector } from 'react-redux';
import DayPractice from '../components/DayPractice';
import { DayType, RootState } from '../types';



const DayContainer: React.FC = () => {
  const dayData = useSelector<RootState, DayType[] | null>((state) => state.day.day)
  
  return (
    <DayPractice  dayData={dayData} />
  )
}

export default DayContainer