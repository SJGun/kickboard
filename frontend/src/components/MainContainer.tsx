import React, { ReactNode } from 'react';

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-[calc(100vh-40px-65px)] overflow-y-auto">
        {children}
      </div>
    </>
  );
};

export default MainContainer;
