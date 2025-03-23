import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 24px;
  border: 0.5px solid #000000;
  width: 344px;
  height: 344px;
  transition: all 0.4s ease-in;

  :hover {
    color: white !important;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const PriceContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`;
