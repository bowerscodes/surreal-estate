import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<AddProperty />);

    expect(asFragment).toMatchSnapshot();
  });

  it("records the correct values", () => {
    const { getByTestId } = render(
      <AddProperty>
        <input data-testid="title-input" value="Maralago" />
      </AddProperty>
    );

    expect(getByTestId("title-input").innerHTML).toBe("Maralago");
  });
});
