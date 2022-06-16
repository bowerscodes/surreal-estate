import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

const validProps = {
  fields: {
    title: "High Rise",
    city: "Manchester",
    price: 0,
    type: "Flat",
    bedrooms: 0,
    bathrooms: 0,
  },
};

describe("PropertyCard", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<PropertyCard {...validProps.fields} />);

    expect(asFragment).toMatchSnapshot();
  });
  it("renders an email button at the bottom of the card", () => {
    const { getByText } = render(<PropertyCard {...validProps.fields} />);

    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Email")).toBeInstanceOf(HTMLButtonElement);
  });
});
