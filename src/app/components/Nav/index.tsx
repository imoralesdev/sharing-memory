"use client";

import React, { useState } from "react";
import "./Nav.css";
import Logo from "@/app/svg/Logo";

type NavLink = {
  label: string;
  href: string;
  isActive?: boolean;
};

type NavProps = {
  logo: string;
  primaryLinks: NavLink[];
  mobileLinks: NavLink[];
};

const Nav: React.FC<NavProps> = ({ primaryLinks, mobileLinks }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <Logo />
        </div>
        <ul className="nav__primary">
          {primaryLinks.map((link, index) => (
            <li key={index} className="nav__primary-item">
              <a
                href={link.href}
                className={`nav__primary-link ${link.isActive ? "nav__primary-link--active" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav__mobile-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav__mobile ${isMobileOpen ? "show" : ""}`}>
          {mobileLinks.map((link, index) => (
            <li key={index} className="nav__mobile-item">
              <a
                href={link.href}
                className={`nav__mobile-link ${link.isActive ? "nav__mobile-link--active" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;