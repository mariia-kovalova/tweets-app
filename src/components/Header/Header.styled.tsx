import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;

  background-color: ${({ theme }) => theme.primary};
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.23);
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
