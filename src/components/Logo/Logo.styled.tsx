import styled from '@emotion/styled';
import { BiMessageCheck } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { tablet } from '../../shared/constants/devicesSizes';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 5px;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.bgcHoverFocusLinks};
  }
`;

export const Text = styled.p`
  display: none;

  @media screen and (min-width: ${tablet}) {
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.secondary};
  }
`;

export const StyledLogoIcon = styled(BiMessageCheck)`
  color: ${({ theme }) => theme.secondary};
  font-size: 36px;
`;
