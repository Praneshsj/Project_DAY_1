import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./userstyle.css";


export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    userrole: "",
    email: "",
  });

  const { name, userrole, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/post", user);
    navigate("/");
  };

  return (

    <div className="containeradd">
      <div className="row">
        <div className="rowbox">
          <h2 className="text-center m-4">Register User</h2>
          <div className="addform">

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="UserRole" className="form-label">
                UserRole
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="userrole"
                value={userrole}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="buttonadd">
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <br></br><br></br>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}