import { FC, Suspense } from 'react';
import { Outlet } from 'react-router';
import { Main } from './SharedLayout.styled';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Loader } from '../Loader';

export const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
};
