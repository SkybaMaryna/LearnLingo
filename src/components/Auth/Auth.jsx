import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { logOutThunk } from '../../redux/auth/authOperations';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  selectIsAuth,
  selectIsAuthLoading,
  selectLogin,
} from 'redux/selectors';
import {
  Button,
  ContainerCenter,
  LoginForm,
  Modal,
  RegisterForm,
} from 'components';
import { getStyledIcon } from 'components/Button/Button.styled';
import { StyledAuthWrapper, StyledCongrats } from './Auth.styled';

const StyledFiLogIn = getStyledIcon(FiLogIn);
const StyledFiLogOut = getStyledIcon(FiLogOut);

export const Auth = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);

  const isAuth = useSelector(selectIsAuth);
  const login = useSelector(selectLogin);
  const isAuthLoading = useSelector(selectIsAuthLoading);

  useEffect(() => {
    if (isOpenLoginModal || isOpenRegisterModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpenLoginModal, isOpenRegisterModal]);

  const dispatch = useDispatch();

  if (isAuthLoading) {
    return (
      <ContainerCenter>
        <ClipLoader color={'var(--accent)'} size={20} />
      </ContainerCenter>
    );
  }

  if (!isAuth) {
    return (
      <StyledAuthWrapper>
        <Button
          text="Log in"
          variant="transparent"
          width="80px"
          height="20px"
          icon={<StyledFiLogIn />}
          onClick={() => {
            setIsOpenLoginModal(true);
          }}
        />
        <Button
          text="Registration"
          variant="dark"
          width="166px"
          height="48px"
          onClick={() => {
            setIsOpenRegisterModal(true);
          }}
        />

        {isOpenRegisterModal && (
          <Modal
            isModalActive={isOpenRegisterModal}
            setActive={setIsOpenRegisterModal}
          >
            <RegisterForm />
          </Modal>
        )}
        {isOpenLoginModal && (
          <Modal
            isModalActive={isOpenLoginModal}
            setActive={setIsOpenLoginModal}
          >
            <LoginForm />
          </Modal>
        )}
      </StyledAuthWrapper>
    );
  }

  return (
    <StyledAuthWrapper>
      <StyledCongrats>Hello, {login}!</StyledCongrats>
      <Button
        text="Log out"
        variant="transparent"
        width="90px"
        height="20px"
        icon={<StyledFiLogOut />}
        onClick={() => {
          dispatch(logOutThunk());
        }}
      />
    </StyledAuthWrapper>
  );
};
