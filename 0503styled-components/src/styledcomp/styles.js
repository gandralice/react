// npm install styled-components -> plugin vscode: vscode-styled-components

import React from "react";
import styled from "styled-components";

// text
export const Text1 = styled.p`
  text-indent: 4px;
  font-size: 1.2rem;
  font-family: monospace;
  color: blueviolet;
`;

export const Text2 = styled.p`
  text-indent: 4px;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Times New Roman";
  color: brown;
`;

// title
export const Title1 = styled.h1`
  font-size: 1.8rem;
  font-family: Georgia, serif;
  color: seagreen;
  background-color: hsl(${Math.random() * 360}, 90%, 50%, 40%);
`;

export const Title2 = styled.h1`
  font-size: 2rem;
  font-family: Arial;
  color: black;
`;

// container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// button
export const BuyBtn = styled.button`
  font-size: 1.5em;
  background: lightblue;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
`;

// ------ Props ------

export const Value = styled.span`
  color: ${({ bColor }) => (bColor === "low" ? "red" : "blue")};
  padding: 4px;
  border-bottom: 2px solid;
`;

// ------ State ------

export const ContactBtn = styled.button`
  font-size: 1.5em;
  background: ${({ state }) => (state ? "green" : "grey")};
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  color: white;
`;

// ------ Pseudo ------

export const Link1 = styled.a`
  position: relative;
  font-size: 1.5rem;
  background-color: gainsboro;
  color: purple;
  cursor: pointer;
  padding: 0 0.5rem;
  border-radius: 4px;
  &:hover {
    background-color: gray;
  }
  &::after {
    position: absolute;
    content: "";
    background-color: purple;
    height: 10px;
    width: 8px;
    margin-left: 2px;
    top: 10px;
  }
`;
