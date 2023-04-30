import styled from '@emotion/styled';
import { AiFillHeart } from 'react-icons/ai';
import { tablet } from '../../shared/constants/devicesSizes';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.secondary};
  padding-top: 14px;
  padding-bottom: 14px;

  @media screen and (min-width: ${tablet}) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colText};

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heart = styled(AiFillHeart)`
  font-size: 24px;
  color: ${({ theme }) => theme.accent};
`;

export const Link = styled.a`
  color: inherit;
`;
