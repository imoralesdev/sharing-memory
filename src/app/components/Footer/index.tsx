import React from "react";
import NavColumns from "@/app/components/NavColumn";
import Facebook from "@/app/svg/Facebook";
import Instagram from "@/app/svg/Instagram";
import Youtube from "@/app/svg/Youtube";

import "./Footer.css";

export type FooterProps = Record<string, never>;

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer" role="footer">
      <div className="footer__container">
        <NavColumns
          variant="address"
          title="Contact"
          addressText="Sharing Memory Headquarters"
          listItems={[
            "123 Healing Pathway",
            "St. Petersburg, FL 33701",
            "Phone: (123) 456-7890",
            "Email: support@sharingmemory.com",
          ]}
        />
        <NavColumns
          variant="about"
          title="About"
          listItems={[
            "At Sharing Memory, we are dedicated to supporting individuals and families through the challenging journey of grief. Our compassionate team offers medical care, emotional guidance, and educational resources to help you heal and rediscover hope. Learn more about our mission and services.",
          ]}
        />
        <NavColumns
          variant="about"
          title="Begin Your Healing Journey Today"
          listItems={[
            "Take the first step toward finding peace and support. Whether you need professional guidance or a community to lean on, we’re here to help.",
          ]}
        />
        <NavColumns
          variant="blog"
          title="Latest Blog Post"
          blogTitle="How to Support a Loved One Through Grief"
          blogCopy="Explore our blog for insightful articles, expert advice, and personal stories that inspire and guide you through life’s most difficult transitions."
        />
        <NavColumns
          variant="social"
          title="Find Out More"
          socialLinks={[
            { href: "https://facebook.com", icon: <Facebook fill="#FFF" /> },
            { href: "#", icon: <Instagram fill="#FFF" /> },
            { href: "#", icon: <Youtube fill="#FFF" /> },
          ]}
        />
      </div>
    </footer>
  );
};

export default Footer;
