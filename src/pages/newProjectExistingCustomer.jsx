import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/layout.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

const NewProjectExistingCustomer = () => {
  const { token } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const [customerId, setCustomerId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/find-customer?keyword=${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      setCustomerId(data.id || null);
      setName(data.name || "");
      setEmail(data.email || "");
      setAddress(data.address || "");
      setPhone(data.telephone || "");
      setError("");
    } catch (err) {
      setCustomerId(null);
      setName("");
      setEmail("");
      setAddress("");
      setPhone("");
      setError("Customer not found or unauthorized.");
    }
  };

  const handleContinue = () => {
    if (customerId && name && email) {
      navigate("/newprojectdetails", {
        state: {
          customer: {
            id: customerId,
            name,
            email,
            address,
            telephone: phone,
          },
        },
      });
    } else {
      setError("Please find a valid customer before continuing.");
    }
  };

  return (
    <Layout>
      <div className="new-project-container">
        <div className="title">New Project</div>

        <div className="form-container">
          <h2 className="form-title">Customer Details</h2>

          <div className="search-row1">
            <input
              type="text"
              className="search-input"
              placeholder="Search the customer"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch} className="btn">
              Find
            </button>
          </div>

          <div className="form-fields">
            <label>Name</label>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Address</label>
            <input
              type="text"
              placeholder="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label>Tel. No</label>
            <input
              type="text"
              placeholder="Tel. No"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button onClick={handleContinue} className="btn">
            Continue
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NewProjectExistingCustomer;
