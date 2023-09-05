import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components';
// import HomePage from 'pages/HomePage/HomePage';
// import TeachersPage from 'pages/TeachersPage/TeachersPage';
// import FavoritePage from 'pages/FavoritePage/FavoritePage';
import { PublicRoute, PrivateRoute } from 'hoc';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('pages/TeachersPage/TeachersPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));

export const App = () => {
  return (
    <>
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
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
