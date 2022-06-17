import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CityFilter from "../../components/CityFilter";

describe("CityFilter", () => {
  it("the CityFilter component renders correctly", () => {
    const { asFragment, getByText } = render(
      <Router>
        <CityFilter />
      </Router>
    );

    expect(asFragment).toMatchSnapshot();
    expect(getByText("Manchester")).toBeInTheDocument();
    expect(getByText("Liverpool")).toBeInTheDocument();
    expect(getByText("Leeds")).toBeInTheDocument();
    expect(getByText("Sheffield")).toBeInTheDocument();
  });
});
