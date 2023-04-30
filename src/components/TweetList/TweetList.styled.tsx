import styled from '@emotion/styled';
import { desktop, tablet } from '../../shared/constants/devicesSizes';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: ${desktop}) {
    gap: 38px;
  }
`;

export const Item = styled.li`
  flex-basis: 100%;

  @media screen and (min-width: ${tablet}) {
    flex-basis: calc((100% - (20px * 2)) / 3);
  }

  @media screen and (min-width: ${desktop}) {
    flex-basis: calc((100% - (38px * 2)) / 3);
  }
`;
