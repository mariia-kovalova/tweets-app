import styled from '@emotion/styled';
import { AiFillHeart } from 'react-icons/ai';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.secondary};
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colText};
`;

export const Heart = styled(AiFillHeart)`
  font-size: 24px;
  color: ${({ theme }) => theme.accent};
`;

export const Link = styled.a`
  color: inherit;
`;
