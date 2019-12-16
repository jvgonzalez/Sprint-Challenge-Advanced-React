import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App.js";
import { render } from "@testing-library/react";
import TopCounter from "./Components/TopCounter";

afterEach(rtl.cleanup);

it("renders without crashing app", () => {
   render(<App />)
})

it("displays Women in the World Cup", () => {
  const container = render(<App />);
  container.getByText("Women in the World Cup"); 
});

it("Top Counter component renders", () => {
  render(<TopCounter />)
})


it("displays increment button", () => {
  const container = render(<TopCounter />);
  container.getByTestId("increment-button"); 
});

