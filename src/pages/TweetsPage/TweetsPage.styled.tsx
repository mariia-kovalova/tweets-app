import styled from '@emotion/styled';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { Button } from '../../shared/styles/components/Button.styled';

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
  margin: 26px auto 0;

  text-transform: uppercase;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
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
