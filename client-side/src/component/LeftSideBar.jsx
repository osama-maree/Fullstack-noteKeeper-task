import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import HomeIcon from "@mui/icons-material/Home.js";
import DeleteIcon from "@mui/icons-material/Delete.js";
import Profile from "./Profile.jsx";
const SideBar = ({ toggleHome, toggleRemove, toggleAdd }) => {
  const data = [
    { title: "Home", icon: <HomeIcon />, fun: toggleRemove },
    { title: "Deleted Note", icon: <DeleteIcon />, fun: toggleHome },
    { title: "Add note", icon: <AddCircleOutlineIcon />, fun: toggleAdd },
  ];
  return (
    <Box>
      <Toolbar>
        <Profile img={"myImg.png"}title={"Osama Maree"} />
      </Toolbar>
      <Divider />
      <List>
        {data.map((item, index) => (
          <ListItem key={index} onClick={item.fun}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText sx={{ color: "#78909c !important" }}>
                {item.title}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
