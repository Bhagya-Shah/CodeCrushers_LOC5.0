import { useHMSActions } from "@100mslive/react-sdk";
import { useState } from "react";
import React from "react";

function Join() {
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjQwYzJmN2Y1Mzc2OWVjZDFkYTI2MDlmIiwicm9vbV9pZCI6IjY0MGMzNTM0Nzk1ZWFhZDNlYjY3MmRhMyIsInVzZXJfaWQiOiJzdWdzeWhtcCIsInJvbGUiOiJlbXBsb3llZSIsImp0aSI6ImNlMTRkZjNhLTEyOGQtNDRlYy1hNzYwLTM3ZDZmZDA4ZWQ3ZSIsInR5cGUiOiJhcHAiLCJ2ZXJzaW9uIjoyLCJleHAiOjE2Nzg2ODI2NzR9.FH3kE1PPquwO2IN8W361MEC5WqIQpu4l6U7OI-WUhOA"
  });

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hmsActions.join({
      userName: inputValues.name,
      authToken: inputValues.token
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Join Room</h2>
      <div className="input-container">
        <input
          required
          value={inputValues.name}
          onChange={handleInputChange}
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
        />
      </div>
      {/* <div className="input-container">
        <input
          required
          value={inputValues.token}
          onChange={handleInputChange}
          id="token"
          type="text"
          name="token"
          placeholder="Auth token"
        />
      </div> */}
      <button className="btn-primary">Join</button>
    </form>
  );
}

export default Join;
