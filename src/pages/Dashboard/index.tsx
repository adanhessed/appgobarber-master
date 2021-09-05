import React from 'react';
import { View } from 'react-native';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

import { Container, Title } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <View>
        <Title>Dashboard</Title>
      </View>
      <Button onPress={signOut}>Sair</Button>
    </Container>
  );
};

export default Dashboard;
