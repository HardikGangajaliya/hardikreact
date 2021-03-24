import React from "react";
import ServiceCard from "./ServiceCard";
import Sdata from "./ServiceData";
import SearchImg from "./SearchImg";
import Weather from "./Weather";
const Service = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto ">
            <div className="row">
              {Sdata.map((val, index) => {
                return (
                  <ServiceCard
                    key={index}
                    id={index}
                    img={val.imgsrc}
                    title={val.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row ">
          <div className="col-12 col-sm-12 col-lg-5 mx-auto">
            <SearchImg />
          </div>
          <div className="col-12 col-sm-12 col-lg-5 mx-auto">
            <Weather />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
