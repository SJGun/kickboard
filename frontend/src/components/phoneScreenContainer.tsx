import React, { ReactNode } from 'react';

type PhoneScreenContainerProps = {
  children: ReactNode;
};

const PhoneScreenContainer: React.FC<PhoneScreenContainerProps> = ({
  children,
}) => {
  return (
    <div
      className="h-full"
      style={{
        width: '412px',
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
