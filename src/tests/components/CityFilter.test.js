import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CityFilter from "../../components/CityFilter";

describe("CityFilter", () => {
  it("the CityFilter component renders correctly", () => {
    const { asFragment } = render(<CityFilter />);

    expect(asFragment).toMatchSnapshot();
  });
});
