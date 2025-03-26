import styled from '@emotion/styled';

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 8px;
  gap: 40px;
  min-width: 361px;
  max-width: 548px;
  height: 198px;

  @media (min-width: 768px) {
    height: 324px;
    min-width: 754px;
  }
  @media (min-width: 1024px) {
    height: 324px;
    min-width: 548px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const DetailsContainer = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Model = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.div``;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #df0000;
  width: fit-content;
  cursor: pointer;
`;
