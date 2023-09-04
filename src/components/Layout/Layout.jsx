import { Outlet } from 'react-router-dom';
import { ContainerCenter, Header } from 'components';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyledToTopBtn } from './Layout.styled';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

export const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (top = 0) => {
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ContainerCenter>
        <Header />
      </ContainerCenter>
      <main>
        <Outlet />
      </main>
      {isVisible && <StyledToTopBtn type="button" onClick={scrollToTop} ><BsFillArrowUpCircleFill color='var(--accent' size='60'/></StyledToTopBtn>}
    </>
  );
};
