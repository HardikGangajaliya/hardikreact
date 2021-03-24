import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';

const Header = (props) => {
  const [username, setusername] = useState(props.user);
  const [pass, setpass] = useState(props.pass);
  const [show, setshow] = useState(false);
  const [user, setuser] = useState(props.user);

  useEffect(() => {
    alert(`Welcome Mr. ${username}`);
  }, [props.user]);

  const InputEvent1 = (e) => {
    setusername(e.target.value);
  };
  const InputPass = (e) => {
    setpass(e.target.value);
  };

  const setnm = () => {
    setuser(username);
    setshow(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="container">
            <span
              className="navbar-brand"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <span className="fa fa-user-circle" aria-hidden="true"></span>{" "}
              {user}
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    activeClassName="nav-active"
                    exact
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="nav-active"
                    exact
                    to="/service"
                  >
                    Service
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="nav-active"
                    exact
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="nav-active"
                    exact
                    to="/keepnote"
                  >
                    Note
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="nav-active"
                    exact
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* -------------------------------success message----------- */}

      {show === false ?null:<div class="alert alert-success alert-dismissible fade show pb-4 text-center" role="alert">
         Changes <strong>Successfully!</strong>
        <span
          class="btn-close float-right"
          data-bs-dismiss="alert"
          aria-label="Close"
        ><CloseIcon /></span>
      </div>}

      {/* ------------------------------Model--------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Profile
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  onChange={InputEvent1}
                  defaultValue={username}
                  type="text"
                  name="fullname"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  onChange={InputPass}
                  value={pass}
                  type="text"
                  name="password"
                  className="form-control"
                  id="exampleFormControlInput2"
                  autoComplete="off"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={setnm}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
