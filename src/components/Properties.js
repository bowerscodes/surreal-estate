import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  axios.defaults.baseURL = "http://localhost:3000/api/v1";

  useEffect(() => {
    axios
      .get("/PropertyListing")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.log(error);
        setAlert({ message: "Server error. Please try again later." });
      });
  });

  return (
    <div className="properties">
      <Alert message={alert.message} success={alert.isSuccess} />
      <h2>Properties</h2>
      <div className="properties-card-grid">
        {properties &&
          properties.map((property) => (
            <PropertyCard
              key={property._id}
              {...property}
              // img={property.img}
              // title={property.title}
              // type={property.type}
              // city={property.city}
              // bedrooms={parseInt(property.bedrooms, 10)}
              // bathrooms={parseInt(property.bathrooms, 10)}
              // price={parseInt(property.price, 10)}
              className="propertycards"
              data-testid="property-card"
            />
          ))}
      </div>
    </div>
  );
}

export default Properties;
