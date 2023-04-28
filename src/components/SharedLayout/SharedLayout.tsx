import { FC } from 'react';
import { Outlet } from 'react-router';
import { Main } from './SharedLayout.styled';

export const SharedLayout: FC = () => {
  return (
    <div>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
