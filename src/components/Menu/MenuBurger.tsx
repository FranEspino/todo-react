import React from "react";
import "./Menu.css";
import { slide as Menu } from "react-burger-menu";
import { Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import HailIcon from '@mui/icons-material/Hail';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import MapIcon from '@mui/icons-material/Map';
import PublicIcon from '@mui/icons-material/Public';

export default (props:any) => {
  return (
    // Pass on our props
    <Menu {...props} className="">
      <Box
      flex={1}
      bgcolor='blue'
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position={"fixed"}>
       <List sx={{width: '70vw'}}>
          <ListItem disablePadding sx={{marginTop: '3em'}}>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HailIcon />
              </ListItemIcon>
              <ListItemText primary="Solicitudes App" />
            </ListItemButton>
          </ListItem>
      
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText primary="Solicitudes Web" />
            </ListItemButton>
          </ListItem>
      
          <ListItem disablePadding>
          
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Pasajeros" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Administradores" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalTaxiIcon />
              </ListItemIcon>
              <ListItemText primary="Conductores" />
            </ListItemButton>
          </ListItem>
        
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="Mapa" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Cerrar Sesion" />
            </ListItemButton>
          </ListItem>
          </List>

          </Box>
    </Box>
    </Menu>
  );
};
