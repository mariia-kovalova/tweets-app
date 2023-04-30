import styled from '@emotion/styled';
import { tablet } from '../../shared/constants/devicesSizes';

export const Tittle = styled.h1`
  margin-top: 100px;

  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colText};

  @media screen and (min-width: ${tablet}) {
    font-size: 32px;
  }
`;
