import React, { ReactNode } from 'react';

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer1: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-[calc(100vh-40px)] w-full overflow-y-auto border border-black px-8 pt-8">
        {children}
      </div>
    </>
  );
};

export default MainContainer1;
