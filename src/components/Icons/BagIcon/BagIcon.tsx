import React from 'react';

const BagIcon: React.FC<{ isActive?: boolean }> = ({ isActive = false }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isActive ? (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4706 4H9.76471V7.76471H6V20H18.2353V7.76471H14.4706V4ZM13.5294 7.76471V11.0588H14.4706V7.76471H13.5294ZM10.7059 7.76471V11.0588H9.76471V7.76471H10.7059ZM10.7059 7.76471H13.5294V4.94118H10.7059V7.76471Z"
        fill="black"
      />
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4706 4.99609H9.76471V8.7608H6V20.9961H18.2353V8.7608H14.4706V4.99609ZM13.5294 9.70198V12.0549H14.4706V9.70198H17.2941V20.0549H6.94118V9.70198H9.76471V12.0549H10.7059V9.70198H13.5294ZM13.5294 8.7608V5.93727H10.7059V8.7608H13.5294Z"
        fill="black"
      />
    )}
  </svg>
);

export default BagIcon;
