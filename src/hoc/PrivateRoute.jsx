import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAuth } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? children : <Navigate to="/teachers" />;
};
