import { Avatar, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <>
      <Avatar alt="Remy Sharp" src="/assets/myImg.png" />
      <Typography variant="body1" sx={{ color: "#78909c !important" }} ml={2}>
        Osama Maree
      </Typography>
    </>
  );
};

export default Profile;
