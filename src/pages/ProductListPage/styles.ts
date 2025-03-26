import styled from '@emotion/styled';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    padding: 0 16px;
    gap: 24px;

    @media (min-width: 768px) {
        padding: 0 40px;
        gap: 48px;
    }

    @media (min-width: 1024px) {
        padding: 0 100px;
    }
`;
