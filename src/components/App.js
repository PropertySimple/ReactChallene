import React, { Component } from "react";
import MortageCalculator from "./mortage-calculator/mortage-calculator";
import styled,{ createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyled = createGlobalStyle`
  @import url(${props => props.theme.fontSource});
  html {
    font: 300 62.5% ${props => props.theme.fontFamily};
    letter-spacing: -0.5px;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fontFamily};
    line-height: 1.5;
    font-size: 1.2rem;
    text-rendering: optimizeLegibility;
    background: white;
    color: ${props => props.theme.gray};
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 900;
  }
  h3 {
    font-size: 1.6rem;
  }

`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider
        theme={{
          fontFamily: "Open Sans",
          fontSource:
            "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800",
          pink: "#ff3867",
          orange: "#f15a29",
          yellow: "#ffcb1f",
          blue: "#53c9f7",
          gray: "#424143",
          lightGray: "#999999"
        }}
      >
        <React.Fragment>
          <Container>
            <MortageCalculator title="Affordability" />
          </Container>
          <GlobalStyled />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
