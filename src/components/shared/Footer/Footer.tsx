import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return <div>&copy; {year} Vocabori. All rights reserved.</div>;
};

export default Footer;
