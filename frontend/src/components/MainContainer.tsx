import React, { ReactNode } from 'react';

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <>
      <div className="flex-1 min-h-[calc(100vh-40px-65px)] w-full overflow-y-auto border border-black px-8 pt-8">
        {children}
      </div>
    </>
  );
};

export default MainContainer;
