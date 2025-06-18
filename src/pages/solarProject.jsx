// import Layout from "../components/layout.jsx";
// import "./solarProject.css";
// import SearchIcon from "@mui/icons-material/Search";
// import AddBoxIcon from "@mui/icons-material/AddBox";
// import PriorityHighOutlinedIcon from "@mui/icons-material/PriorityHighOutlined";
// import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import AddModal from "../components/addModal.jsx";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../contexts/AuthContext.jsx";

// const SolarProject = () => {
//   const navigate = useNavigate();
//   const [addModal, setAddModal] = useState(false);
//   const handleDetailsClick = () => {
//     navigate("/projectdetails");
//   };
//   const { token } = useAuth();
//   const [projects, setProjects] = useState([]);
//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get(
//         "http://127.0.0.1:8000/api/get-projects",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setProjects(response.data);
//     } catch (error) {
//       console.error("Error fetching projects:", error);
//     }
//   };
//   return (
//     <Layout>
//       <div className="solarProjectWrapper">
//         <div className="solarProject">
//           <h2>Solar Projects</h2>
//           <div className="text11">
//             <span className="text1">All</span>
//             <span
//               className="text2"
//               onClick={() => navigate("/ongridsolarproject")}
//             >
//               On-grid
//             </span>
//             <span
//               className="text3"
//               onClick={() => navigate("/offgridsolarproject")}
//             >
//               Off-grid & Hybrid
//             </span>
//           </div>

//           <div className="searchBox">
//             <SearchIcon className="searchIcon" />
//             <input type="text1" placeholder="" />
//           </div>
//           <div className="plusWrapper">
//             <div className="plus" onClick={() => setAddModal(true)}>
//               <AddBoxIcon fontSize="large" />
//             </div>
//             <AddModal show={addModal} onClose={() => setAddModal(false)} />
//           </div>
//         </div>

//         <div className="all">
//           <div className="details" onClick={handleDetailsClick}>
//             <span>#360</span>
//             <span>Divisional Secretary Yakkalamulla</span>
//             <span>Galle</span>
//             <span>On-grid</span>
//             <span>2024-12-06</span>
//             <div className="priorityIcon" fontSize="small">
//               <PriorityHighOutlinedIcon />
//             </div>
//           </div>
//           <div className="details" onClick={handleDetailsClick}>
//             <span>#360</span>
//             <span>Divisional Secretary Yakkalamulla</span>
//             <span>Galle</span>
//             <span>On-grid</span>
//             <span>2024-12-06</span>
//             <div className="priorityIcon" fontSize="small">
//               <PriorityHighOutlinedIcon />
//             </div>
//           </div>
//           <div className="details" onClick={handleDetailsClick}>
//             <span>#360</span>
//             <span>Divisional Secretary Yakkalamulla</span>
//             <span>Galle</span>
//             <span>On-grid</span>
//             <span>2024-12-06</span>
//             <div className="priorityIcon" fontSize="small">
//               <PriorityHighOutlinedIcon />
//             </div>
//           </div>
//           <div className="details" onClick={handleDetailsClick}>
//             <span>#360</span>
//             <span>Divisional Secretary Yakkalamulla</span>
//             <span>Galle</span>
//             <span>On-grid</span>
//             <span>2024-12-06</span>
//             <div className="priorityIcon" fontSize="small">
//               <PriorityHighOutlinedIcon />
//             </div>
//           </div>
//           <div className="details" onClick={handleDetailsClick}>
//             <span>#360</span>
//             <span>Divisional Secretary Yakkalamulla</span>
//             <span>Galle</span>
//             <span>On-grid</span>
//             <span>2024-12-06</span>
//             <div className="priorityIcon" fontSize="small">
//               <PriorityHighOutlinedIcon />
//             </div>
//           </div>
//           <div className="details" onClick={handleDetailsClick}>
//             <span>#360</span>
//             <span>Divisional Secretary Yakkalamulla</span>
//             <span>Galle</span>
//             <span>On-grid</span>
//             <span>2024-12-06</span>
//             <div className="priorityIcon" fontSize="small">
//               <PriorityHighOutlinedIcon />
//             </div>
//           </div>
//         </div>
//         <div className="arrow">
//           <div className="arrow1">
//             <ArrowBackIosOutlinedIcon />
//           </div>
//           <div className="text4">
//             <span>2 of 10</span>
//           </div>
//           <div className="arrow2">
//             <ArrowForwardIosOutlinedIcon />
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default SolarProject;

import Layout from "../components/layout.jsx";
import "./solarProject.css";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PriorityHighOutlinedIcon from "@mui/icons-material/PriorityHighOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import AddModal from "../components/addModal.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext.jsx";
const SolarProject = () => {
  const navigate = useNavigate();
  const [addModal, setAddModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const { token } = useAuth();
  const handleDetailsClick = (id) => {
    navigate(`/projectdetails/${id}`); // Make sure route exists
  };

  const formatType = (type) => {
    if (type === "on_grids") return "On-grid";
    if (type === "off_grid_hybrids") return "Off-grid & Hybrid";
    return type;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get-projects",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add Sanctum token here
            },
          }
        );
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Layout>
      <div className="solarProjectWrapper">
        <div className="solarProject">
          <h2>Solar Projects</h2>
          <div className="text11">
            <span className="text1">All</span>
            <span
              className="text2"
              onClick={() => navigate("/ongridsolarproject")}
            >
              On-grid
            </span>
            <span
              className="text3"
              onClick={() => navigate("/offgridsolarproject")}
            >
              Off-grid & Hybrid
            </span>
          </div>

          <div className="searchBox">
            <SearchIcon className="searchIcon" />
            <input type="text" placeholder="Search project..." />
          </div>

          <div className="plusWrapper">
            <div className="plus" onClick={() => setAddModal(true)}>
              <AddBoxIcon fontSize="large" />
            </div>
            <AddModal show={addModal} onClose={() => setAddModal(false)} />
          </div>
        </div>

        <div className="all">
          {projects.length === 0 ? (
            <p style={{ padding: "1rem", color: "#888" }}>
              No projects available.
            </p>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="details"
                onClick={() => handleDetailsClick(project.id)}
              >
                <span>#{project.id}</span>
                <span>{project.customer?.name || "Unknown Customer"}</span>
                <span>{project.neatest_town}</span>
                <span>{formatType(project.type)}</span>
                <span>
                  {project.project_installation_date?.split(" ")[0] || "N/A"}
                </span>
                <div className="priorityIcon" fontSize="small">
                  <PriorityHighOutlinedIcon />
                </div>
              </div>
            ))
          )}
        </div>

        <div className="arrow">
          <div className="arrow1">
            <ArrowBackIosOutlinedIcon />
          </div>
          <div className="text4">
            <span>1 of 1</span> {/* Update if pagination is added */}
          </div>
          <div className="arrow2">
            <ArrowForwardIosOutlinedIcon />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SolarProject;
