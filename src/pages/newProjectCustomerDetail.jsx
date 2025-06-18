import "./newProjectCustomerDetail.css";
import Layout from "../components/layout.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";

const NewProjectCustomerDetail = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleDetailsClick = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/addcustomers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          email,
          address,
          phone,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Customer created:", data);
        navigate("/newprojectdetails", { state: { customer: data.customer } });
      } else {
        alert("Error: " + (data.message || "Something went wrong."));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
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
              // Add search functionality later
            />
            <button className="find-btn">Find</button>
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

          <button className="continue-btn" onClick={handleDetailsClick}>
            Continue
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NewProjectCustomerDetail;
