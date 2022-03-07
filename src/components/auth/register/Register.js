import React, { useState, useEffect } from "react";
import UseForm from "./UseForm";
import ValidateInfo from "./ValidateInfo";
import "../register/Register.css"

const Regsiter = () => {
  const { handleChange, values, handleSubmit, errors } = UseForm(ValidateInfo);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Welcome</h1>

        <div className="form-inputs">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            className="form-input"
            placeholder="Enter your first name"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            className="form-input"
            placeholder="Enter your last name"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Register
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default Regsiter;
