import styled from '@emotion/styled';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { Button } from '../../shared/styles/components/Button.styled';
import { tablet } from '../../shared/constants/devicesSizes';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const StyledBackIcon = styled(BsArrowLeftCircle)`
  font-size: 20px;
`;

export const StyledButton = styled(Button)`
  width: 196px;
  height: 40px;
  margin: 26px auto 0;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
  transition: transform 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: ${tablet}) {
    height: 50px;
  }
`;

export const Info = styled.p`
  margin: 26px auto 0;

  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colText};
`;
