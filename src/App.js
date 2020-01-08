import React from "react";
import { Header } from "semantic-ui-react";
import Footer from "./components/Footer";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: #242d69;
  height: 100vh;
`;

function App() {
  return (
    <StyledDiv>
      <Header size="huge">This Header is from Semantic react</Header>
      <Footer buildNumber="1.0.0" />
    </StyledDiv>
  );
}

export default App;
