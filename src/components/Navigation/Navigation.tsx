import { FC } from 'react';
import { List, StyledNavLink } from './Navigation.styled';
import { navLinks } from './navLinks';

export const Navigation: FC = () => {
  return (
    <nav>
      <List>
        {navLinks.map(item => (
          <li key={item.name}>
            <StyledNavLink to={item.path}>{item.name}</StyledNavLink>
          </li>
        ))}
      </List>
    </nav>
  );
};
