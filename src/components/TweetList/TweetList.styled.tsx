import styled from '@emotion/styled';
import { Button } from '../../shared/styles/components/Button.styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 38px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - (38px * 2)) / 3);
`;

export const StyledButton = styled(Button)`
  margin: 26px auto 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
`;

export const End = styled.p`
  margin: 26px auto 0;

  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colText};
`;
