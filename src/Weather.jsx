import React, { useState, useEffect } from "react";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setWeather] = useState("surat");
  
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=60d4a7dca375f7858da891e06dea068b`;
      const res = await fetch(url);
      const resjson = await res.json();
      setCity(resjson.main);
    };
    fetchApi();
  },[search]);
  const InputEvent = (e) => {
    setWeather(e.target.value);
  };
  return (
    <>
      <div className="box img_div">
        <input
          type="search"
          name="search"
          placeholder="Search City"
          onChange={InputEvent}
          autoComplete="off"
        />
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        {!city ? (
          <p className="location">No data found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fa fa-street-view"></i>
                <span className="city-name"> {search}</span>
              </h2>
              <h1 className="temp">{city.temp}&deg;C</h1>
              <p className="date">Min : {city.temp_min}&deg;C | Max : {city.temp_max}&deg;C</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Weather;
