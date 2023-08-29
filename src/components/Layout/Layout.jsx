import { Outlet } from 'react-router-dom';
import { Container, Header } from 'components';

export const Layout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
