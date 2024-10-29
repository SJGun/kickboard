import React, { ReactNode } from 'react';

type PhoneScreenContainerProps = {
  children: ReactNode;
};

const PhoneScreenContainer: React.FC<PhoneScreenContainerProps> = ({ children }) => {
  return (
    <div
      style={{
        width: '412px',
        height: '917px',
        margin: '0 auto',
        border: '1px solid #000',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default PhoneScreenContainer;