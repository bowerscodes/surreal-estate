import React, { useState } from "react";
import axios from "axios";
import "../styles/addproperty.css";

function AddProperty() {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      price: "",
      type: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  axios.defaults.baseURL = "http://localhost:3000/api/v1";

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);

    axios
      .post("/PropertyListing", fields)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div className="add-property">
      <h2>Add a Property</h2>
      <form onSubmit={handleAddProperty}>
        <label htmlFor={fields.title}>
          Title of the listing:
          <input
            type="text"
            name="title"
            id="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="i.e. 2 bedroom flat in central"
            data-testid="title-input"
          />
        </label>
        <label htmlFor={fields.city}>
          City:
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
            data-testid="city-input"
          >
            <option value="manchester">Manchester</option>
            <option value="leeds">Leeds</option>
            <option value="sheffield">Sheffield</option>
            <option value="liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor={fields.price}>
          Listing value:
          <input
            type="number"
            name="price"
            id="price"
            value={fields.price}
            onChange={handleFieldChange}
            placeholder="180000"
            data-testid="price-input"
          />
        </label>
        <label htmlFor={fields.type}>
          Type of property:
          <select
            type="select"
            name="type"
            id="type"
            value={fields.type}
            onChange={handleFieldChange}
            data-testid="type-input"
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor={fields.bedrooms}>
          How many bedrooms?
          <input
            type="number"
            name="bedrooms"
            id="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            placeholder="2"
            data-testid="bedrooms-input"
          />
        </label>
        <label htmlFor={fields.bathrooms}>
          How many bathrooms?
          <input
            type="number"
            name="bathrooms"
            id="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            placeholder="3"
            data-testid="bathrooms-input"
          />
        </label>
        <button type="submit" name="addListing">
          Add Listing
        </button>
      </form>
    </div>
  );
}

export default AddProperty;
