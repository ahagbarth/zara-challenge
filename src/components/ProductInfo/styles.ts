import styled from '@emotion/styled';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  gap: 40px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  min-width: 260px;
  min-height: 300px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const Selectors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 24px;
`;

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StorageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
