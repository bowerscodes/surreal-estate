import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Properties from "../../components/Properties";

describe("Properties", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <Router>
        <Properties />
      </Router>
    );

    expect(asFragment).toMatchSnapshot();
  });
  // it("renders a PropertyCard for all items in the returned array", () => {
  //   const { getAllByTestId } = render(<Properties />);

  //   expect(getAllByTestId("property-card")).toHaveLength();
  // });
});
