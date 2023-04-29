import { FC } from 'react';
import { StyledLogoIcon, Text, StyledNavLink } from './Logo.styled';
import { home } from '../../shared/constants/routes';

export const Logo: FC = () => {
  return (
    <StyledNavLink to={home}>
      <StyledLogoIcon />
      <Text>Tweets App</Text>
    </StyledNavLink>
  );
};
