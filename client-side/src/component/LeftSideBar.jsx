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
import React from "react";
import HomeIcon from "@mui/icons-material/Home.js";
import DeleteIcon from "@mui/icons-material/Delete.js";
import Profile from "./Profile.jsx";
const SideBar = ({ toggleHome, toggleRemove }) => {
  return (
    <Box>
      <Toolbar>
        <Profile />
      </Toolbar>

      <Divider />
      <List>
        {["Home", "Deleted Note"].map((text, index) => (
          <ListItem
            key={text}
            onClick={index === 0 ? toggleRemove : toggleHome}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeIcon /> : <DeleteIcon />}
              </ListItemIcon>
              <ListItemText sx={{ color: "#78909c !important" }}>
                {text}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
