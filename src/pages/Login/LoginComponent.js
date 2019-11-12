import React from 'react';

import {
  Container,
  Box,
  Row,
  Content,
  Image,
  Info,
  RegisterBtn,
} from './LoginStyles';
import CustomInput from '../../components/Input';
import Button from '../../components/Button';

export default function LoginComponent() {
  return (
    <Container>
      <Box>
        <Row>
          <h1>Log in</h1>
          <RegisterBtn>Register</RegisterBtn>
        </Row>
        <CustomInput placeholder='Email' />
        <br />
        <CustomInput placeholder='Password' type='password' />
        <br />
        <Button label='Sign in' />
      </Box>
      <Content>
        <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Info>
        <Image />
      </Content>
    </Container>
  );
}
