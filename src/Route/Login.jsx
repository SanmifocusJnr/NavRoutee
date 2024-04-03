/** @format */

import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
const StyledContainer = styled(Stack)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "lightgray", // Adjust background color as needed
});

const Input = styled(TextField)({
  marginTop: "2rem",
  width: "300px", // Adjust input width as needed
  fontSize: "14px", // Adjust font size as needed
});

const ImageInput = styled("input")({
  display: "none",
  marginBottom: "2rem",
});

function LoginPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission (e.g., send data to server for login)
    console.log("Form data:", formData);
  };

  return (
    <StyledContainer>
      <Avatar
        src={formData.image ? URL.createObjectURL(formData.image) : null}
        sx={{ width: 80, height: 80 }}
      />
      <ImageInput
        accept="image/*"
        id="image-upload"
        type="file"
        name="image"
        onChange={handleChange}
      />
      <label htmlFor="image-upload">
        <Button variant="contained" component="span">
          Upload Image
        </Button>
      </label>
      <Input
        label="First Name"
        variant="outlined"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <Input
        label="Last Name"
        variant="outlined"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Link style={{ textDecoration: "none" }} to="/about" className="click">
        <Button
          sx={{ width: "12srem", marginTop: "2rem" }}
          variant="contained"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Link>
    </StyledContainer>
  );
}

export default LoginPage;
