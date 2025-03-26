import styled from '@emotion/styled';

export const StorageContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border: 1px solid #cccccc;
  background-color: transparent;
  min-width: 89px;
  ${({ isActive }) => isActive && `border-color: #000000`}
`;
