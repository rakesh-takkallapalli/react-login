import React from "react";

function Footer({ buildNumber }) {
  return (
    <div>
      <a href="www.google.com">Terms & Conditions</a>- RakeshBlog {buildNumber}{" "}
      © {new Date().getFullYear} RTakkal, LLC
    </div>
  );
}

export default Footer;
