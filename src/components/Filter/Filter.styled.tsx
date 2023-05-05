import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Select = styled.select`
  cursor: pointer;
  display: block;
  width: 100%;
  height: 48px;
  padding-right: 16px;
  padding-left: 16px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colText};
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.accent};
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
