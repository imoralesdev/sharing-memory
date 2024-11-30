import React from "react";
import "./NavColumns.css";

export type SocialLink = {
  href?: string;
  icon: React.ReactNode;
};

export type NavColumnsProps = {
  variant?: "address" | "about" | "blog" | "social";
  title: string;
  addressText?: string;
  listItems?: string[];
  blogTitle?: string;
  blogCopy?: string;
  socialLinks?: SocialLink[];
};

const NavColumns: React.FC<NavColumnsProps> = ({
  variant = "address",
  title,
  addressText,
  listItems,
  blogTitle,
  blogCopy,
  socialLinks,
}) => {
  return (
    <div className="nav-column">
      <h3 className="nav-column__title">{title}</h3>

      {variant === "address" && addressText && (
        <div className="nav-column__address">{addressText}</div>
      )}

      {(variant === "address" || variant === "about") && listItems && (
        <ul className="nav-column__list">
          {listItems.map((item, index) => (
            <li key={index} className="nav-column__list-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      {variant === "blog" && (
        <>
          {blogTitle && <h4 className="nav-column__blog-title">{blogTitle}</h4>}
          {blogCopy && <div className="nav-column__blog-copy">{blogCopy}</div>}
        </>
      )}

      {variant === "social" && socialLinks && (
        <div className="nav-column__social">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className="nav-column__social-link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Social link ${index + 1}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavColumns;
