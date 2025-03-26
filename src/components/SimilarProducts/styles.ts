import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  padding-bottom: 40px;

    @media (max-width: 768px) {
        padding: 0 16px;
        padding-bottom: 40px;

    }

`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: auto;
`;
