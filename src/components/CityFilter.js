import React from "react";
import { Link } from "react-router-dom";
import "../styles/cityfilter.css";

function CityFilter() {
  return (
    <div className="cityfilter">
      <Link to={`/?query={"city":"Manchester"}`} className="cityfilter-item">
        Manchester
      </Link>
      <Link to={`/?query={"city":"Liverpool"}`} className="cityfilter-item">
        Liverpool
      </Link>
      <Link to={`/?query={"city":"Leeds"}`} className="cityfilter-item">
        Leeds
      </Link>
      <Link to={`/?query={"city":"Sheffield"}`} className="cityfilter-item">
        Sheffield
      </Link>
    </div>
  );
}

export default CityFilter;
