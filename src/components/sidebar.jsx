import "./sidebar.css";
import DatasetIcon from "@mui/icons-material/Dataset";
import GroupsIcon from "@mui/icons-material/Groups";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import FaxIcon from "@mui/icons-material/Fax";
//import MenuIcon from '@mui/icons-material/Menu';
//import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const projectRoutes = [
    "/solarproject",
    "/projectdetails",
    "/newprojectcustomerdetail",
    "/newprojectdetails",
  ];
  const serviceRoute = [
    "/scheduledservices",
    "/Searchservices",
    "/completedservices",
    "/servicedetails",
    "/serviceDetails2",
  ];
  const userRoute = ["/users", "/addusers"];

  const isFaxActive = projectRoutes.some((route) =>
    location.pathname.startsWith(route)
  );
  const isDatasetActive = location.pathname.startsWith("/dashboard");
  const isServiceActive = serviceRoute.some((route) =>
    location.pathname.startsWith(route)
  );
  const isGroupActive = userRoute.some((route) =>
    location.pathname.startsWith(route)
  );
  const handleClick = () => {
    navigate("/scheduledservices");
    setIsSidebarOpen(false);
  };
  const handleClick1 = () => {
    navigate("/solarproject");
    setIsSidebarOpen(false);
  };
  const handleClick2 = () => {
    navigate("/users");
    setIsSidebarOpen(false);
  };
  const handleClick3 = () => {
    navigate("/dashboard");
    setIsSidebarOpen(false);
  };
  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li>
            <div
              className={`icon-wrapper ${isDatasetActive ? "active-box" : ""}`}
            >
              <DatasetIcon
                className="sidebar-icon"
                onClick={handleClick3}
                fontSize="1rem"
              />
            </div>
          </li>
          <li>
            <div className={`icon-wrapper ${isFaxActive ? "active-box" : ""}`}>
              <FaxIcon
                className="sidebar-icon"
                onClick={handleClick1}
                fontSize="1rem"
              />
            </div>
          </li>
          <li>
            <div
              className={`icon-wrapper ${isServiceActive ? "active-box" : ""}`}
            >
              <MiscellaneousServicesIcon
                className="sidebar-icon"
                onClick={handleClick}
                fontSize="1rem"
              />
            </div>
          </li>
          <li>
            <div
              className={`icon-wrapper ${isGroupActive ? "active-box" : ""}`}
            >
              <GroupsIcon
                className="sidebar-icon"
                onClick={handleClick2}
                fontSize="1rem"
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

// import "./sidebar.css";
// import DatasetIcon from '@mui/icons-material/Dataset';
// import GroupsIcon from '@mui/icons-material/Groups';
// import SettingsIcon from '@mui/icons-material/Settings';
// import FaxIcon from '@mui/icons-material/Fax';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleClick = () => {
//     navigate('/scheduledservices');
//     setIsSidebarOpen(false);
//   };

//   const handleClick1 = () => {
//     navigate('/solarproject');
//     setIsSidebarOpen(false);
//   };

//   const handleClick2 = () => {
//     navigate('/users');
//     setIsSidebarOpen(false);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(prev => !prev);
//   };

//   return (
//     <>
//       <div className="sidebar-toggle-button" onClick={toggleSidebar}>
//         {isSidebarOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
//       </div>

//       {isSidebarOpen && (
//         <div className="sidebar">
//           <ul className="sidebar-menu">
//             <li><DatasetIcon className="sidebar-icon" onClick={handleClick1} fontSize="large" /></li>
//             <li><FaxIcon className="sidebar-icon" onClick={handleClick} fontSize="large" /></li>
//             <li><SettingsIcon className="sidebar-icon" fontSize="large" /></li>
//             <li><GroupsIcon className="sidebar-icon" onClick={handleClick2} fontSize="large" /></li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Sidebar;
