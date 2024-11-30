import React from "react";
import "./ContentColumn.css";

interface ContentColumn {
  title: string;
  text: string;
}

const ContentColumn: React.FC<ContentColumn> = ({ title, text }) => {
  return (
    <div className="content-column">
      <div className="content-column__container">
        <h2 className="content-column__title">
          {title}
          <sup>TM </sup>
        </h2>
        <div className="content-column__copy">
          {text}
        </div>
      </div>
    </div>
  );
};

export default ContentColumn;
