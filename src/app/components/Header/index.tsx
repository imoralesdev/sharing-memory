"use client";

import React from "react";
import "./Header.css";
import Utilitarian from "@/app/components/Utilitarian";
import Nav from "@/app/components/Nav";

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  const handleSearchSubmit = (query: string) => {
    console.log("Search submitted with query:", query);
  };

  const primaryLinks = [
    { label: "Home", href: "/", isActive: true },
    { label: "Services", href: "/services" },
    { label: "Education", href: "/services" },
    { label: "Support Groups", href: "/services" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const mobileLinks = [...primaryLinks];
  return (
    <header className="header" role="header" id="header">
      <Utilitarian
        phone="1-888-123-4567"
        language="Español"
        onSearchSubmit={handleSearchSubmit}
      />
      <Nav logo="↧Logo" primaryLinks={primaryLinks} mobileLinks={mobileLinks} />
    </header>
  );
};

export default Header;
