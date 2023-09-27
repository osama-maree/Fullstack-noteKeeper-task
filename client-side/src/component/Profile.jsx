import { Avatar, Typography } from "@mui/material";
import React from "react";

const Profile = ({ img, title }) => {
  return (
    <>
      <Avatar alt="Remy Sharp" src={`/assets/${img}`} />
      <Typography variant="body1" sx={{ color: "#78909c !important" }} ml={2}>
        {title}
      </Typography>
    </>
  );
};

export default Profile;
