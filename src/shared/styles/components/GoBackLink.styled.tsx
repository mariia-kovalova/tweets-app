import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: flex;
  gap: 5px;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colText};
  :hover,
  :focus {
    color: ${({ theme }) => theme.accent};
  }
`;
