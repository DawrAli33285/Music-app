import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Avatar,
  ListItemIcon,
  Tooltip,
  IconButton,
} from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
import HomeIcon from "../../../../assets/Home.svg";
import UploadIcon from "../../../../assets/upload.svg";
import FileIcon from "../../../../assets/file.svg";
import CancelIcon from "../../../../assets/cancel.svg";

// import DescriptionIcon from "@mui/icons-material/Description";
// import UploadIcon from "@mui/icons-material/Upload";
// import CancelIcon from "@mui/icons-material/Cancel";

import "./dashboard.css";
import Statement from "./Statement";
import Logout from "@mui/icons-material/Logout";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import Home from "./Home";
import UploardList from "./UploardList";
import PiracyComplaints from "./PiracyComplaints";
import Copyva_logo from "../../../../assets/Copyva_logo.png";
import MultiStepForm from "./MusicUplorad/index";
import MusicUplorad from "./MusicUplorad/index";
import UploardContent from "./UploardContent";
import ProfileSettings from "./ProfileSettings/ProfileSettings";

const AdminPanel = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement logout functionality
  };

  const [activeItem, setActiveItem] = useState(0);
  console.log("activeItem", activeItem);
  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  useEffect(() => {}, [activeItem]);

  return (
    <div>
      <AppBar
        position="static"
        style={{ background: "black" }}
        className="top_barDashboard"
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={Copyva_logo} alt="logo" />
          <div>
            <Tooltip title="Account">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem component={Link} to="/dashboard/profile-settings">
                <ListItemIcon>
                  <EditNoteOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Profile Settings
              </MenuItem>
              <MenuItem>
                <ListItemIcon component={Link} to="/dashboard/profile-settings">
                  <EditNoteOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Change Password
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={2.5}>
            <Paper className="left_nav highlightsidebar">
              <List
                component="nav"
                style={{
                  background: "#2F3032",
                  color: "white",
                  height: "100vh",
                }}
              >
                <ListItem
                  component={Link}
                  to="/dashboard/home"
                  onClick={() => handleItemClick(0)}
                  style={{
                    background:
                      activeItem === 0
                        ? "linear-gradient(180deg, #F4C05C 0%, #D8A136 100%)"
                        : "transparent",
                    borderRadius: "6px",
                    color: activeItem === 0 ? "#111" : "#FFF",
                  }}
                >
                  <ListItemIcon>
                    {/* <HomeIcon style={{ color: activeItem === 0 ? 'black' : 'white' }} /> */}
                    <img
                      src={HomeIcon}
                      alt="Home"
                      style={{
                        width: 16,
                        height: 16,
                        color: activeItem === 0 ? "#111" : "#FFF",
                        filter: activeItem === 0 && "invert(1)",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                  component={Link}
                  to="/dashboard/Statement"
                  onClick={() => handleItemClick(1)}
                  style={{
                    background:
                      activeItem === 1
                        ? "linear-gradient(180deg, #F4C05C 0%, #D8A136 100%)"
                        : "transparent",
                    borderRadius: "6px",
                    color: activeItem === 1 ? "#111" : "#FFF",
                  }}
                >
                  <ListItemIcon>
                    {/* <DescriptionIcon style={{ color: activeItem === 1 ? 'black' : 'white' }} />  */}
                    <img
                      src={FileIcon}
                      alt="Home"
                      style={{
                        width: 12,
                        height: 16,
                        color: activeItem === 1 ? "#111" : "#FFF",
                        filter: activeItem === 1 && "invert(1)",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Statement" />
                </ListItem>
                <ListItem
                  component={Link}
                  to="/dashboard/uploard-list"
                  onClick={() => handleItemClick(2)}
                  style={{
                    background:
                      activeItem === 2
                        ? "linear-gradient(180deg, #F4C05C 0%, #D8A136 100%)"
                        : "transparent",
                    borderRadius: "6px",
                    color: activeItem === 2 ? "#111" : "#FFF",
                  }}
                >
                  <ListItemIcon>
                    {/* <UploadIcon
                      style={{ color: activeItem === 2 ? "black" : "white" }}
                    /> */}
                    <img
                      src={UploadIcon}
                      alt="Home"
                      style={{
                        width: 16,
                        height: 16,
                        color: activeItem === 2 ? "#111" : "#FFF",
                        filter: activeItem === 2 && "invert(1)",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Upload List" />
                </ListItem>
                <ListItem
                  component={Link}
                  to="/dashboard/piracy-complaints"
                  onClick={() => handleItemClick(3)}
                  style={{
                    background:
                      activeItem === 3
                        ? "linear-gradient(180deg, #F4C05C 0%, #D8A136 100%)"
                        : "transparent",
                    borderRadius: "6px",
                    color: activeItem === 3 ? "#111" : "#FFF",
                  }}
                >
                  <ListItemIcon>
                    {/* <CancelIcon style={{ color: activeItem === 3 ? 'black' : 'white' }} /> */}
                    <img
                      src={CancelIcon}
                      alt="Home"
                      style={{
                        width: 16,
                        height: 16,
                        color: activeItem === 3 ? "#111" : "#FFF",
                        filter: activeItem === 3 && "invert(1)",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={
                    <>
                      <span className='desktoponly'>Piracy </span>Complaints
                    </>
                  } />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={9.35} className="Dashboard_rightContent">
            <Paper>
              <Typography variant="h5"></Typography>
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="Statement" element={<Statement />} />
                <Route path="uploard-list" element={<UploardList />} />
                <Route
                  path="piracy-complaints"
                  element={<PiracyComplaints />}
                />
                <Route path="Music-upload" element={<MusicUplorad ad />} />
                <Route path="upload-content" element={<UploardContent />} />
                <Route path="profile-settings" element={<ProfileSettings />} />
              </Routes>
            </Paper>
          </Grid>
        </Grid>
        {/* <Grid container spacing={3}>
          <Grid item xs={2.5}>
            <Paper className="left_nav highlightsidebar">
              <List component="nav" style={{ background: "#2F3032", color: "white", height: "100vh" }}>
                <ListItem component={Link} to="/dashboard/home">
                  <ListItemIcon>
                    <HomeIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem component={Link} to="/dashboard/Statement">
                  <ListItemIcon>
                    <DescriptionIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Statement" />
                </ListItem>
                <ListItem component={Link} to="/dashboard/uploard-list">
                  <ListItemIcon>
                    <UploadIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Uploard List" />
                </ListItem>
                <ListItem component={Link} to="/dashboard/piracy-complaints">
                  <ListItemIcon>
                    <CancelIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Piracy Complaints" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={9.35} className="Dashboard_rightContent">
            <Paper>
              <Typography variant="h5"></Typography>
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="Statement" element={<Statement />} />
                <Route path="uploard-list" element={<UploardList />} />
                <Route path="piracy-complaints" element={<PiracyComplaints />} />
                <Route path="Music-upload" element={<MusicUplorad />} />
                <Route path="upload-content" element={<UploardContent />} />
                <Route path="profile-settings" element={<ProfileSettings />} />
                
              </Routes>
            </Paper>
          </Grid>
        </Grid> */}
      </div>
    </div>
  );
};

export default AdminPanel;
