import React from 'react';

import Menu from '../../components/Menu';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu />
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
