import React from "react";
import { Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import HailIcon from '@mui/icons-material/Hail';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import MapIcon from '@mui/icons-material/Map';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import PublicIcon from '@mui/icons-material/Public';

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
     
      sx={{ marginRight:{sm:'0em' ,md:  '1em' , lg:  '2em'},  display: { xs: "none", sm: "block" } }}
    >
      <Box position={"fixed"}>

 
       <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard"  sx={{ display: {  sm: "none" , md: 'none', lg: 'block'} }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HailIcon />
              </ListItemIcon>
              <ListItemText primary="Solicitudes App" sx={{ display: {  sm: "none" , md: 'none', lg: 'block'} }} />
            </ListItemButton>
          </ListItem>
      
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText primary="Solicitudes Web" sx={{ display: {  sm: "none" , md: 'none', lg: 'block'} }} />
            </ListItemButton>
          </ListItem>
      
          <ListItem disablePadding>
          
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Pasajeros" sx={{ display: {  sm: "none" , md: 'none', lg: 'block'} }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Administradores" sx={{ display: {  sm: "none" , md: 'none', lg: 'block'} }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalTaxiIcon />
              </ListItemIcon>
              <ListItemText primary="Conductores" sx={{ display: {  sm: "none" , md: 'none', lg: 'block'} }} />
            </ListItemButton>
          </ListItem>
        
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="Mapa" sx={{ display: {  sm: "none" , md: 'none', lg: 'block'} }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Cerrar Sesion" sx={{ display: {  sm: "none" , md: 'none', lg: 'block'} }} />
            </ListItemButton>
          </ListItem>
          </List>

          </Box>
    </Box>
  );
};

export default Sidebar;
