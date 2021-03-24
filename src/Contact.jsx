import React, { useState } from "react";
import Button from "@material-ui/core/Button";
const Contact = () => {
  const [val, setValue] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setValue((prevalue) => {
      return { ...prevalue, [name]: value };
    });
  };
  // const InputEvent1 = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   //const {name, value} = e.target;
  //   setname((preValue) => {
  //     return {
  //       ...preValue,
  //       [name]: value,
  //     };
  //   });
  // };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Thank for the contact us mr. ${val.fullname}. 
    Your phone no is : ${val.phone} . 
    Your email is is : ${val.email} .
    Your review is : ${val.msg} .`);
  };
  console.log(val);

  return (
    <>
      <div className="contact_div">
        <div className="container text-white">
          <div className="row pt-3">
            <form className="col-sm-10 mx-auto" onSubmit={formSubmit} autoComplete="off">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  onChange={InputEvent}
                  value={val.fullname}
                  type="text"
                  name="fullname"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className="form-label">
                  Phone
                </label>
                <input
                  onChange={InputEvent}
                  value={val.phone}
                  name="phone"
                  type="text"
                  pattern="[0-9]{10}"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="9876543210"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  onChange={InputEvent}
                  value={val.email}
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  name="msg"
                  onChange={InputEvent}
                  value={val.msg}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <Button type="submit" className="btn-sub mt-3">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
