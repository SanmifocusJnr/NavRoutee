/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles"; // Import for optional styling

const Nav = () => {
  const StyledInput = styled("input")({
    display: "none",
  });

  const AvatarUploader = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null); // Stores image URL for display

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageUrl(e.target.result);
        setUploadedImage(file);
      };

      reader.readAsDataURL(file);
    };

    const handleUpload = () => {
      // Add logic to handle image upload to your backend server (if needed)
      console.log("Uploaded image:", uploadedImage);
    };

    return (
      <div>
        <Avatar
          src={imageUrl}
          size={40}
          round={true}
          onClick={() => document.getElementById("image-upload").click()}
        />
        <StyledInput
          accept="image/*"
          id="image-upload"
          type="file"
          onChange={handleImageChange}
        />
      </div>
    );
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "10vh",
        backgroundColor: "black",
        color: "white",
        fontSize: "1rem",
        display: "flex",
        flexDirection: "row",
        textTransform: "capitalize",
        justifyContent: "space-evenly",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Stack>React App.</Stack>
      <Stack
        sx={{
          width: "50%",
          backgroundColor: "black",
          color: "white",
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/" className="click">
          Home
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to="/contact"
          className="click"
        >
          Contact
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about" className="click">
          About
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to="/setting"
          className="click"
        >
          Settings
        </Link>
      </Stack>
      <Link style={{ textDecoration: "none" }} to="/login" className="click">
        Login
      </Link>
      <Link style={{ textDecoration: "none" }} className="click">
        Logout
      </Link>
      <AvatarUploader />
    </Stack>
  );
};

export default Nav;
