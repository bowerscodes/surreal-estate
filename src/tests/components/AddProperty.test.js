import React from "react";
import { render, screen } from "@testing-library/react";
import AddProperty from "../../components/AddProperty";

describe("AddProperty", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<AddProperty />);

    expect(asFragment).toMatchSnapshot();
  });
});
