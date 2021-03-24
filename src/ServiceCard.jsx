import { NavLink } from "react-router-dom";
import React from "react";
const ServiceCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto mt-4">
        <div className="card">
          <img
            src={props.img}
            className="card-img-top img-fluid"
            alt="Card"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" className="btn btn-outline-primary">
             More Information
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
