import styled from '@emotion/styled';

export const Typography = styled.span<{ variant?: string }>`
  font-size: 14px;
  font-weight: 300;
  line-height: 100%;
  font-family: 'Helvetica Neue';

  ${({ variant }) => variant === 'header' && `
    font-size: 20px;
  `}

  ${({ variant }) => variant === 'caption' && `
    font-size: 10px;
    color: #79736D;
  `}

${({ variant }) => variant === 'subtitle' && `
    font-size: 12px;
  `}
  
`;
