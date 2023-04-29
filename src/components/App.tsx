import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { SharedLayout } from './SharedLayout';
import { any, home } from '../shared/constants/routes';
import { tweets } from '../shared/constants/routes';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TweetsPage = lazy(() => import('../pages/TweetsPage/TweetsPage'));

export const App: FC = () => {
  return (
    <Routes>
      <Route path={home} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path={tweets} element={<TweetsPage />} />
        <Route path={any} element={<HomePage />} />
      </Route>
    </Routes>
  );
};
