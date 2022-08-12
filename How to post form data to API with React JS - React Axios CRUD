import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


import { Container } from "react-bootstrap";

function User() {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [useraddress, setUseraddress] = useState("");
  const [message, setMessage] = useState("");

    const handleusername = (event) => {
    const user_name = event.target.value;
    setUsername(user_name);
  };

  const handleemail = (event) => {
    const user_email = event.target.value;
    setUseremail(user_email);
  };

  const handleaddress = (event) => {
    const user_address = event.target.value;
    setUseraddress(user_address);
  };

  const submitUser = async (e) => {
    e.preventDefault();
    const userdata = {
      user_name: username,
      user_email: useremail,
      user_address: useraddress,
    };
    await axios
      .post(
        "http://localhost/devopsdeveloper/user/adduser",
        JSON.stringify(userdata)
      )
      .then((result) => {
        setMessage(result.data.msg);
        console.log(result.data);
        console.log(result.data.msg);
      });
  };
  return (
    <React.Fragment>
      <Container className="content">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="mt-4 mb-4 fw-bold">
              Insert , Update and Delete records in React Js  
            </h2>

            {message ? (
              <div className="text-success text-white">
                {" "}
                <h5>{message} </h5>
              </div>
            ) : (
              <></>
            )}

            <form onSubmit={submitUser} className="row g-3">
              <div className="col-md-3">
                <label className="form-label">User Name </label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control p-2"
                  onChange={(e) => handleusername(e)}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  name="user_email"
                  className="form-control p-2"
                  onChange={(e) => handleemail(e)}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="user_address"
                  className="form-control p-2"
                  onChange={(e) => handleaddress(e)}
                />
              </div>

              <div className="col-md-3">
                <button type="submit" className="btn btn-primary mt-4">
                  Submit
                </button>
              </div>
            </form>
          </div>

        
        </div>
      </Container>
    </React.Fragment>
  );
}

export default User;
