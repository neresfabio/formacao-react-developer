import React from "react";
import { Button } from "../Button";
import logo from "../../assets/logo-dio.png";
import {useNavigate} from "react-router-dom";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = ({ autenticado }) => {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/login');
  };
  const handleClickSignUp = () => {
    navigate('/sign');
  };
  const handleClickToHome = () => {
    navigate('/');
  };
  
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/50967217?v=4" />
          ) : (
            <>
              <MenuRight src="#" onClick={handleClickToHome}> Home </MenuRight>
              <Button title="Entrar" onClick={handleClickSignIn}/>
              <Button title="Cadastrar" onClick={handleClickSignUp}/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
