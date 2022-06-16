import React from "react";
import PropTypes from "prop-types";
import "../styles/propertycard.css";

function PropertyCard(props) {
  const { img, title, type, city, bedrooms, bathrooms, price } = props;
  return (
    <div className="property-card">
      <img src={img} alt="property-card-img" className="property-card-img" />
      <h3 className="property-card-title">{title}</h3>
      <p className="property-card-type-city">{`${type} - ${city}`}</p>
      <p className="property-card-bedrooms">{`${bedrooms}`} bed</p>
      <p className="property-card-bathrooms">{`${bathrooms}`} bath</p>
      <p className="property-card-price">£{`${price}`}</p>
      <a href="mailto:someone@example.com" target="_blank" rel="noreferrer">
        <button type="button" className="property-card-email-btn">
          Email
        </button>
      </a>
    </div>
  );
}

PropertyCard.defaultProps = {
  img: "../assets/property-card-img.png",
};

PropertyCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default PropertyCard;
