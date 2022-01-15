import { Global } from "@emotion/react";
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reset from "./components/GlobalStyles";

ReactDom.render(
  <BrowserRouter>
    <Global styles={reset} />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
