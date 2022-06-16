import React from "react";
import PropertyCard from "./PropertyCard";

function Properties() {
  return (
    <div className="properties">
      <h2>Properties</h2>
      <div className="properties-card-grid">
        <PropertyCard
          img="https://thumbs.cityrealty.com/assets/smart/736x/webp/1/16/1655f4e3904fb79cb987ab7755d2b3f4b8f37f88/1-city-point.jpg"
          title="Beautiful Apartment in the heart of the city"
          type="Flat"
          city="Manchester"
          bedrooms={2}
          bathrooms={2}
          price={200000}
        />
      </div>
    </div>
  );
}

export default Properties;
