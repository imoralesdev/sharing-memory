import React from "react";
import "./HeroBanner.css";

type HeroBannerProps = {
  title: string;
  content: string;
  imageUrl: string;
  isImageRight?: boolean; 
};

const HeroBanner: React.FC<HeroBannerProps> = ({ title, content, imageUrl, isImageRight = true }) => {
  return (
    <div className={`hero-banner ${isImageRight ? "image-right" : "image-left"}`}>
      <div className="hero-banner__text">
        <h2 className="hero-banner__title">{title}</h2>
        <p className="hero-banner__content">{content}</p>
      </div>
      <div className="hero-banner__image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default HeroBanner;