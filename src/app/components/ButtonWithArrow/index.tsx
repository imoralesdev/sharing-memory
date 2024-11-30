import React from "react";
import "./ButtonWithArrow.css";

export type ButtonWithArrowProps = {
  label: string;
  variant?: "default" | "services";
  onClick?: () => void;
};

const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({
  label,
  variant = "default",
  onClick,
}) => {
  const buttonClass = `button ${
    variant === "services" ? "button--services" : "button--with-arrow"
  }`;

  return (
    <a className={buttonClass} onClick={onClick}>
      <span className="button__label">{label}</span>
      <span className="button__arrow">
        <svg id="arrow" viewBox="0 0 10.5 14" width="100%" height="100%">
          <path
            fill="#FFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.9 8.2C.7 9.9.2 12.1 0 14c2.9-2.9 6.3-5.6 10.5-7C6.3 5.5 2.7 3 0 0c.1 1.7.7 4 1.9 5.7v2.5z"
          ></path>
        </svg>
      </span>
    </a>
  );
};

export default ButtonWithArrow;
