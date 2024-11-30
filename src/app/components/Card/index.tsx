import React from "react";
import "./Card.css";

export type CardProps = {
  image: string;
  text: string;
  title: string;
  variant?: "type-a" | "type-b"
};

const CardTypeA: React.FC<CardProps> = ({ image, text, variant, title}) => {

  const cardClass = `card ${
    variant === "type-a" ? "card-type-a" : "card-type-b"
  }`;


  return (
    <div className={cardClass}>
      <span className={`${cardClass}__thumbnail-wrap`}>
        <img
          alt={title}
          className={`${cardClass}__thumbnail`}
          src={image}
        />
      </span>
      <span className={`${cardClass}__title`}>{title}</span>
      <span className={`${cardClass}__copy`}>
        {text}
      </span>
      <span className={`${cardClass}__read-more`}>Read More</span>
    </div>
  );
};

export default CardTypeA;
