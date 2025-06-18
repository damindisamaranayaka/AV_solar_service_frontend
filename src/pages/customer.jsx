import "./supervisors.css";
import Layout from "../components/layout.jsx";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext.jsx";

const Customer = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`, // Add Sanctum token here
        },
      })
      .then((response) => {
        const customers = response.data.filter(
          (user) => user.user_type_id === 3
        );
        setUsers(customers);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDetailsClick = () => {
    navigate("/addusers");
  };

  return (
    <Layout>
      <div className="usersContainer">
        <h2 className="title">Users</h2>
        <div className="userTypeTabs">
          <span className="tab" onClick={() => navigate("/users")}>
            Supervisors
          </span>
          <span className="tab" onClick={() => navigate("/admins")}>
            Admin
          </span>
          <span className="tab" onClick={() => navigate("/super-admins")}>
            Super Admin
          </span>
          <span className="tab1">Customers</span>
          <div className="iconGroup">
            <span className="tabIcon">
              <AccountCircleIcon />
            </span>
            <span className="tabIcon">
              <AddIcon onClick={handleDetailsClick} />
            </span>
          </div>
        </div>

        <div className="userCards">
          {users.map((user, index) => (
            <div className="userCard" key={index}>
              <AccountCircleIcon className="userIcon" fontSize="large" />
              <span className="userName">{user.name}</span>
              <span className="status">Active</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Customer;
