import React, { useState } from "react";
import "./UserDetails.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const UserDetails = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
    streetNr: "",
    additionalInfo: "",
    zipCode: "",
    place: "",
    country: "",
    code: "",
    phoneNumber: "",
    email: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/userdetails", formData)
      .then((response) => {
        console.log(response.data);
        alert("User registered successfully!");
        // Optional: Reset form after successful submission
        setFormData({
          title: "",
          firstName: "",
          lastName: "",
          position: "",
          company: "",
          businessArena: "",
          employees: "",
          streetNr: "",
          additionalInfo: "",
          zipCode: "",
          place: "",
          country: "",
          code: "",
          phoneNumber: "",
          email: "",
          terms: false,
        });
        navigate('/user-profile'); // Navigate to the user profile page
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        alert("Error registering user.");
      });
  };

  return (
    <form className="container p-5" onSubmit={handleSubmit}>
      <div className="form-section">
        <h4 className="mb-5">General Information</h4>
        <select
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        >
          <option value="">Title</option>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
        </select>

        <div className="d-flex mt-3">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="me-2"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>

        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Position"
          required
        />

        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          required
        />

        <div className="d-flex">
          <input
            type="text"
            name="businessArena"
            value={formData.businessArena}
            onChange={handleChange}
            placeholder="Business Arena"
            className="me-2"
            required
          />
          <input
            type="text"
            name="employees"
            value={formData.employees}
            onChange={handleChange}
            placeholder="Employees"
            required
          />
        </div>
      </div>

      <div className="form-section right">
        <h4 className="mb-5">Contact Details</h4>
        <input
          type="text"
          name="streetNr"
          value={formData.streetNr}
          onChange={handleChange}
          placeholder="Street + Nr"
          required
        />

        <input
          type="text"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          placeholder="Additional Information"
        />

        <div className="d-flex">
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="me-2"
            required
          />
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            placeholder="Place"
            required
          />
        </div>

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select Country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </select>

        <div className="d-flex mt-3">
          <input
            type="tel"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="Code +"
            className="me-2"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <div className="mt-3">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms">
            I do accept the Terms and Conditions of your site.
          </label>
        </div>

        <button type="submit" className="submit mt-3">
          Register Badge
        </button>
      </div>
    </form>
  );
};

export default UserDetails;
