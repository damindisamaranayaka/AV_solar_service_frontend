import "./newProjectDetails.css";
import Layout from "../components/layout.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const NewProjectDetails = () => {
  const { token } = useAuth();
  const location = useLocation();
  // const customer_id = location.state?.customer_id; // get from previous page
  const customer_id = location.state?.customer?.id;

  const [formData, setFormData] = useState({
    project_address: "",
    no_of_panels: "",
    type: "",
    project_installation_date: "",
    neatest_town: "",
    service_years_in_agreement: "",
    service_rounds_in_agreement: "",
    customer_id: customer_id || "", // Important!
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/openproject",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      console.log("Project created:", response.data);
      alert("Project opened successfully!");
    } catch (error) {
      console.error(
        "Error opening project:",
        error.response?.data || error.message
      );
      alert("Error creating project");
    }
  };

  return (
    <Layout>
      <div className="new-project-container">
        <div className="title">New Project</div>
        <div className="form-container">
          <h2 className="form-title">Project Details</h2>

          <div className="form-fields2">
            <div className="leftside">
              <label>Site address</label>
              <input
                name="project_address"
                value={formData.project_address}
                onChange={handleChange}
                type="text"
              />
              <label>No of panels</label>
              <input
                name="no_of_panels"
                value={formData.no_of_panels}
                onChange={handleChange}
                type="text"
              />
              {/* <label>Solar system type</label>
              <input
                name="type"
                value={formData.type}
                onChange={handleChange}
                type="text"
              /> */}

              <label>Solar system type</label>
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="">Select type</option>
                <option value="on_grids">On-grid</option>
                <option value="offgridhybrids">Off-grid&Hybrid</option>
              </select>
            </div>

            <div className="rightside">
              <label>Date to Start Project</label>
              <input
                name="project_installation_date"
                value={formData.project_installation_date}
                onChange={handleChange}
                type="date"
              />
              <label>Nearest Town</label>
              <input
                name="neatest_town"
                value={formData.neatest_town}
                onChange={handleChange}
                type="text"
              />
              <div className="rightSideRowPart">
                <div className="rightSideRowPart1">
                  <label>Service Years</label>
                  <input
                    name="service_years_in_agreement"
                    value={formData.service_years_in_agreement}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
                <div className="rightSideRowPart2">
                  <label>Service rounds</label>
                  <input
                    name="service_rounds_in_agreement"
                    value={formData.service_rounds_in_agreement}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="continue-btn" onClick={handleSubmit}>
            Open Project
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NewProjectDetails;
