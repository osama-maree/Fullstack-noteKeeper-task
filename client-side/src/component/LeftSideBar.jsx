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
  return (
    <Box>
      <Toolbar>
        <Profile />
      </Toolbar>

      <Divider />
      <List>
        {["Home", "Deleted Note", "Add note"].map((text, index) => (
          <ListItem
            key={text}
            onClick={
              index === 0 ? toggleRemove : index === 1 ? toggleHome : toggleAdd
            }
          >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <HomeIcon />
                ) : index === 1 ? (
                  <DeleteIcon />
                ) : (
                  <AddCircleOutlineIcon />
                )}
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
