import styled from '@emotion/styled';

export const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 0.5px solid #000000;
  padding: 16px 0;

  :last-of-type {
    border-bottom: 0.5px solid #000000;
  }
`;
