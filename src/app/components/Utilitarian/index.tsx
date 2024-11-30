"use client";

import React from "react";
import "./Utilitarian.css";

type UtilitarianProps = {
  phone: string;
  language: string;
  onSearchSubmit: (query: string) => void;
};

const Utilitarian: React.FC<UtilitarianProps> = ({ phone, language, onSearchSubmit }) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (e.currentTarget.elements.namedItem("search") as HTMLInputElement).value;
    onSearchSubmit(query);
  };

  return (
    <div className="utilitarian">
      <div className="utilitarian__container">
        <div className="utilitarian__phone">{phone}</div>
        <div className="utilitarian__language">{language}</div>
        <form className="utilitarian__search" onSubmit={handleSearch}>
          <input placeholder="Search" name="search" type="text" />
          <div className="utilitarian__search-submit">
            <input type="submit" />
            <div className="svg__search"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Utilitarian;