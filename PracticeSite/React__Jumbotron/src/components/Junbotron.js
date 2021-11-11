import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import mozambik from "../mozambik.jpg";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    background: url(${mozambik}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    x-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => (
  <Styles>
  <Jumbo fluid className="jumbo">
    <div className="overlay"></div>
    <Container>
      <h1> Web Developer Blog </h1>
      <p>
        This is a common warning that developers run into when starting out with
        hooks in React. There are 3 possible reasons for this warning: You may
        have mismatching versions of React and ReactDOM. You may have more than
        one copy of React running in your application such that the version of
        React imported by ReactDOM is not that same version that you import in
        your application. Most common: You're breaking the rules of hooks. You
        must only call hooks while React is rendering a function component.
      </p>
    </Container>
  </Jumbo>
  </Styles>
);

export default Jumbotron;
