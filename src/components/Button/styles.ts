import styled from '@emotion/styled';

export const ButtonComponent = styled.button<{
  isOutlined: boolean;
  isFullWidth: boolean;
}>`
  width: 116px;
  height: 40px;
  border: 0.5px solid #1b1a18;
  font-family: Helvetica Neue;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 8%;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  ${({ isFullWidth }) =>
    isFullWidth &&
    `
    width: 100%;
  `}

  ${({ isOutlined }) =>
    !isOutlined &&
    `
        background: #1b1a18;
        color: #ffffff; 
    
        :hover { 
            background-color: #282624;      
            border: none;   
        }
                
        :active {
            background-color: #363331;     
            border: none;  
        }

        :disabled {
            background-color: white;
            color: #c2bfbc;
            border: 0.5px solid #dbd9d7;
        }

      `}

  ${({ isOutlined }) =>
    isOutlined &&
    `
        background: #ffffff;
        color: #000000; 
    
        :hover { 
            border: 0.5px solid #282624;
        }
                
        :active {
            color: #000000;
            border: 0.5px solid #363331;
        }

        :disabled {
            color: #c2bfbc;
            border: 0.5px solid #dbd9d7;
        }

      `}
`;
