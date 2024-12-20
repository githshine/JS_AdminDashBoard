import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// @ts-expect-error TS(2345): Argument of type 'HTMLElement | null' is not assig... Remove this comment to see the full error message
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      // @ts-expect-error TS(2786): 'App' cannot be used as a JSX component.
      // @ts-expect-error TS(2786): 'App' cannot be used as a JSX component.
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
