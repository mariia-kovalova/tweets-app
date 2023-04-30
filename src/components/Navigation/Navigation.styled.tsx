import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { tablet } from '../../shared/constants/devicesSizes';

export const List = styled.ul`
  display: flex;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 5px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondary};
  transition: all 0.3s ease-in-out;

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.secondary};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.bgcHoverFocusLinks};
  }

  @media screen and (min-width: ${tablet}) {
    font-size: 20px;
  }
`;
