import React, { useState } from "react";

const SearchImg = () => {
  const [search, setSearch] = useState("");
  const InputEvent = (e) => {
    setSearch(e.target.value);
  };
  const img = `https://source.unsplash.com/1600x900/?${search}`;

  return (
    <>
        <div className="img_div">
          <form autoComplete="off">
            <input
              type="search"
              name="search"
              placeholder="Search Image"
              value={search}
              onChange={InputEvent}
            />
            
            <br />
            {search === "" ?<img src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/01/HERE_logo.svg_.png" alt={img} className="search-img img-fluid" />  : (
              <img src={img} alt={img} className="search-img img-fluid" />
            )}
          </form>
        </div>
    </>
  );
};

export default SearchImg;
