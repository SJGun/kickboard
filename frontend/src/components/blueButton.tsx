import React from 'react';

export type ButtonProps = {
  width: string;
  height: string;
  text?: string;
  fontSize?: string;
  onClick?: () => void;
};

const BlueButton: React.FC<ButtonProps> = ({
  width,
  height,
  text = "Click Me",
  fontSize = "text-[16px]",
  onClick,
}) => {
  return (
    <button
      className={`bg-[#7CD1FF] text-white font-bold rounded-[10px] cursor-pointer ${fontSize}`}
      style={{
        width: width,
        height: height,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BlueButton;