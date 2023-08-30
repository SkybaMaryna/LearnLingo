import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import HomePage from 'pages/HomePage/HomePage';
import TeachersPage from 'pages/TeachersPage/TeachersPage';
import FavoritePage from 'pages/FavoritePage/FavoritePage';
import { PublicRoute, PrivateRoute } from 'hoc';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="teachers"
          element={
            <PublicRoute>
              <TeachersPage />
            </PublicRoute>
          }
        />
        <Route
          path="favorites"
          element={
            <PrivateRoute>
              <FavoritePage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
