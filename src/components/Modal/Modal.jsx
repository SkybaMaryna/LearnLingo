import { useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import {
  StyledBackdrop,
  StyledCloseBtn,
  StyledModalBox,
  StyledModalBoxScroll,
} from './Modal.styled';

export const Modal = ({ active = false, setActive, children }) => {
  useEffect(() => {
    const hendleCloseByEsc = e => {
      if (e.code !== 'Escape') {
        return;
      }
      setActive(false);
    };

    window.addEventListener('keydown', hendleCloseByEsc);

    return () => {
      window.removeEventListener('keydown', hendleCloseByEsc);
    };
  }, [setActive]);

  return (
    <StyledBackdrop
      className={active ? 'backdrop active' : 'backdrop'}
      onClick={() => {
        setActive(false);
      }}
    >
      <StyledModalBoxScroll>
        <StyledModalBox
          className={active ? 'modalBox active' : 'modalBox'}
          onClick={e => e.stopPropagation()}
        >
          <StyledCloseBtn
            type="button"
            onClick={() => {
              setActive(false);
            }}
          >
            {<CgClose size="32" />}
          </StyledCloseBtn>
          {children}
        </StyledModalBox>
      </StyledModalBoxScroll>
    </StyledBackdrop>
  );
};
