import "./LoginPage.css";
import axios from "axios";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        {
          email,
          password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const user = response.data.data.user;
      const token = response.data.data.token;

      if (user.user_type === "admin" || user.user_type === "Super Admin") {
        login(user, token); // call login()
        navigate("/dashboard");
      } else {
        setErrorMsg("Access denied. Only Admins can login.");
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Login failed. Please check your email or password.");
    }
  };

  return (
    <div className="login-wrapper">
      <Container maxWidth="sm">
        <img
          src="/src/images/AVlogo.jpeg"
          alt="Login Logo"
          className="login-image"
        />

        <Box sx={{ textAlign: "center", mt: 2, mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Welcome Back!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Login to access your account
          </Typography>
        </Box>

        <TextField
          margin="normal"
          label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "100%",
            backgroundColor: "#f0f2f5",
            borderRadius: "10px",
            input: { padding: "10px" },
          }}
        />

        <TextField
          margin="normal"
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            width: "100%",
            backgroundColor: "#f0f2f5",
            borderRadius: "10px",
            input: { padding: "12px" },
          }}
        />

        <Typography
          variant="body2"
          sx={{
            textAlign: "right",
            mt: 1,
            color: "#BDBDBD",
            cursor: "pointer",
          }}
        >
          Forgot password?
        </Typography>

        {errorMsg && (
          <Typography variant="body2" color="error" sx={{ mt: 2 }}>
            {errorMsg}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{
            mt: 3,
            width: "50%",
            mx: "auto",
            display: "block",
            borderRadius: "30px",
          }}
        >
          Login
        </Button>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't have an account? <a href="">Sign Up</a>
        </Typography>
      </Container>
    </div>
  );
};

export default LoginPage;
