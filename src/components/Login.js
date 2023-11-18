import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
        //Ở đây dùng post thay vì get
      const response = await axios.post(
        "https://awd-2023.azurewebsites.net/Auth/login",
        { username, password }
      );

      // Save access token
      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);

      // Save refresh token
      const { refreshToken } = response.data;
      localStorage.setItem("refreshToken", refreshToken);

      // Redirect to home
      navigate("/Todo");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  // const handleLogin = async () => {
  //     try {
  //         const response = await fetch('https://awd-2023.azurewebsites.net/auth/login', {
  //             method: 'POST',
  //             headers: {
  //               'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({
  //               username: `${username}@vnuk.udn.vn`,
  //               password: password,
  //             }),
  //           });

  //           if (response.ok) {
  //             // If login is successful, redirect to Todo app home page
  //             // history.push('/todo');
  //             console.log('Login sucess');
  //             navigate('/ToDo');
  //           } else {
  //             // Handle login failure
  //             console.error('Login failed');
  //           }
  //         } catch (error) {
  //           console.error('Error during login:', error);
  //         }
  //       };

  return (
    <div>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
