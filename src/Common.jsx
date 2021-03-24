import React from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <div className="common_div">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="col-xs-12 col-sm-12 col-md-6 order-2 order-md-1 d-flex justify-content-center flex-column">
                  <h4>
                    {props.name}
                    <strong> Hardik Gangajaliya.</strong>
                  </h4>
                  <p className="lead">
                    We have team of talented developer and designer
                  </p>
                  <NavLink exact to={props.visit}>
                    <Button className="get-btn">{props.btn}</Button>
                  </NavLink>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 order-1 order-md-2">
                  <img
                    src={props.imgsrc}
                    alt="computer"
                    className="img-fluid com-img animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Common;
