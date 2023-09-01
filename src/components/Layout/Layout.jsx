import { Outlet } from 'react-router-dom';
import { ContainerCenter, Header } from 'components';

export const Layout = () => {
  return (
    <>
      <ContainerCenter>
        <Header />
      </ContainerCenter>
      <main>
        <Outlet />
      </main>
    </>
  );
};
