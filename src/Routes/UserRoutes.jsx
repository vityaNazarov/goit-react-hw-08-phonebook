import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { Layout } from './Layout/Layout';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const PhonebookPage = lazy(() =>
  import('../pages/PhonebookPage/PhonebookPage')
);
const ImportantContactsPage = lazy(() =>
  import('../pages/ImportantContactsPage/ImportantContactsPage')
);
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<PhonebookPage />} />
            <Route
              path="/important-contacts"
              element={<ImportantContactsPage />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
