import React from 'react';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';   
import { DashboardContainer } from './Dashboard.styles';

const DashboardPage = () => {
  return (
    <DashboardContainer>
      <Sidebar />    
    </DashboardContainer>    
  )
}

export default DashboardPage; 