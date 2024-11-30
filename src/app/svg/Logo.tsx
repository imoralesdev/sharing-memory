import React from "react";

export type LogoProps = {
  width?: number;
  height?: number;
  fill?: string;
};

const Logo: React.FC<LogoProps> = ({
  width = 40,
  height = 40,
  fill = "#000",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={width}
      height={height}
      fill={fill}
    >
      <path
        d="M100 30 C40 20, 10 70, 100 150 C190 70, 160 20, 100 30"
        fill="#FF6F61"
      />
    </svg>
  );
};

export default Logo;
