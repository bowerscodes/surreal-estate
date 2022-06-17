import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import NavBar from "../../components/NavBar";

describe("NavBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <Router>
        <NavBar />
      </Router>
    );

    expect(asFragment).toMatchSnapshot();
  });
});