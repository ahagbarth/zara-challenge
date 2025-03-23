import styled from '@emotion/styled';

export const ColorContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 1px;
  border: 1px solid #cccccc;
  background-color: transparent;

  :active {
    border-color: #000000;
  }
`;

export const ColorBox = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
`;
