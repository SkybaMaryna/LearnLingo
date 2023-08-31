import { Outlet } from 'react-router-dom';
import { Container, ContainerCenter, Header } from 'components';

export const Layout = () => {
  return (
    <>
      <ContainerCenter>
        <Header />
      </ContainerCenter>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
