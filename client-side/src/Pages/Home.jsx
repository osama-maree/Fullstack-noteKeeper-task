import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu.js";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SideBar from "../component/LeftSideBar.jsx";
import CardGrid from "./MyCard.jsx";
import AddNote from "./AddNote.jsx";
import DeletedItem from "./DeletedItem.jsx";
const drawerWidth = 240;
const Home = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [home, setHome] = React.useState(true);
  const [remove, setRemove] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const toggleHome = () => {
    setHome(false);
    setAdd(false);
    setRemove(true);
  };
  const toggleRemove = () => {
    setHome(true);
    setAdd(false);
    setRemove(false);
  };
  const toggleAdd = () => {
    setHome(false);
    setRemove(false);
    setAdd(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#1de9b6 !important",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            Note Keeper
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {
            <SideBar
              toggleHome={toggleHome}
              toggleRemove={toggleRemove}
              toggleAdd={toggleAdd}
            />
          }
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {
            <SideBar
              toggleHome={toggleHome}
              toggleRemove={toggleRemove}
              toggleAdd={toggleAdd}
            />
          }
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {remove && <DeletedItem />}
        {home && <CardGrid />}
        {add && <AddNote />}
      </Box>
    </Box>
  );
};

export default Home;
