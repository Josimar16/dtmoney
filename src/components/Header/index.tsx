import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}