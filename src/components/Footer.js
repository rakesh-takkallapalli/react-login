import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 1rem;
  text-align: center;
`;

function Footer({ buildNumber }) {
  return (
    <StyledDiv>
      <a href="www.google.com">Terms & Conditions</a> - RakeshBlog {buildNumber}{" "}
      © {new Date().getFullYear()} RTakkal, LLC
    </StyledDiv>
  );
}

export default Footer;
