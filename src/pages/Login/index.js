import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles'

import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/action';

// import axios from '../../services/axios';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
  }
  // React.useEffect(() => {
  //   async function getData() {
  //     const response = await axios.get('/alunos');
  //     console.log(response);
  //   }

  //   getData();
  // }, []);
  return (

    <Container>
    <Title>
      Login
      <small>Oie</small>
    </Title>
    <Paragrafo>Teste</Paragrafo>
    <button type="button" onClick={handleClick}> Enviar </button>
    </Container>
  );
}
