import { FC } from 'react';
import { StyledHeader, Wrap } from './Header.styled';
import { Container } from '../../shared/styles/components/Container.styled';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Wrap>
          <Logo />
          <Navigation />
        </Wrap>
      </Container>
    </StyledHeader>
  );
};
