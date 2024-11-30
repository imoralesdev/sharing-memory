"use client";

import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

interface Slide {
  _id?: string;
  text: string;
  image: string;
}

interface HeroProps {
  slides: Slide[];
}

const Hero: React.FC<HeroProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const delay = 10000;

  const animate = (time: number) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
    }

    const deltaTime = time - lastTimeRef.current;

    if (deltaTime >= delay) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      // Reset the last time
      lastTimeRef.current = time;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="hero" id="hero">
      <ul className="hero__slider" id="slider">
        {slides.map((slide, index) => (
          <li
            key={slide._id}
            className={`hero__slide ${
              index === currentIndex
                ? "hero__slide--active"
                : index < currentIndex
                ? "hero__slide--left"
                : "hero__slide--right"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="hero__container">
              <div className="hero__content">
                <h2 className="hero__title">{slide.text}</h2>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hero__arrow hero__arrow--left"
      >
        <svg viewBox="0 0 56 97" width="100%" height="100%">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 97l49-49L0 0h7l49 48L7 97H0z"
          ></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hero__arrow hero__arrow--right"
      >
        <svg viewBox="0 0 56 97" width="100%" height="100%">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 97l49-49L0 0h7l49 48L7 97H0z"
          ></path>
        </svg>
      </button>
      <div className="hero__indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero__indicator ${
              index === currentIndex ? "hero__indicator--active" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
