import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 38px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - (38px * 2)) / 3);
`;
