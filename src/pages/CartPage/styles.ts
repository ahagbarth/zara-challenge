import Button from '@/components/Button';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  gap: 80px;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  gap: 24px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 48px 40px;
  }
`;
export const Footer = styled.footer`
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  color: #000000;
  font-size: 14px;
  padding: 16px 16px 24px 16px;
  gap: 24px;

  @media (min-width: 768px) {
    padding: 24px 40px 40px 40px;
  }

  @media (min-width: 1400px) {
    padding: 24px 100px 56px 100px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;

  @media (min-width: 768px) {
    justify-content: flex-end;
    gap: 40px;
  }
`;

export const PayButton = styled(Button)`
  flex: 1;
`;

export const ContinueButton = styled(Button)`
  flex: 1;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
