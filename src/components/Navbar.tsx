import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  Menu,
  Badge,
  Avatar,
  MenuItem
} from "@mui/material";
import  MenuBurger from './Menu/MenuBurger'
import React , {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import MailIcon from "@mui/icons-material/Mail";
import Notification from "@mui/icons-material/Notifications";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
}));

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
  /*Cuando supera el tamanio sm si lo muestras */

const Notifications = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: "20px",
  alignItems :"center",
  [theme.breakpoints.up("sm")]:{
    display: 'flex'
  }
}));
  /*Cuando supera el sm no lo muestras */
const AvatarBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: "20px",
  alignItems :"center",

  [theme.breakpoints.up("sm")]:{
    display: 'none'
  }
}));

const Navbar = () => {
  const [open,setOpen] = useState(false)

  return (
    <>
    <MenuBurger className={{display: 'none'}} isOpen={open} />
    
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Frapo
        </Typography>
        <MenuIcon onClick={()=> {setOpen(!open)}} sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />
         
        </Search>
        <Notifications>
          <Badge badgeContent={4} color="error" onClick={()=>{setOpen(true)}}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={8} color="error">
            <Notification />
          </Badge>
          <Avatar {...stringAvatar('Richard Espino')} />
      
        </Notifications>
        <AvatarBox >
          <Avatar {...stringAvatar('Richard Espino')} />
          </AvatarBox>
      </StyleToolbar>
     
    </AppBar>
    </>
  );
};

export default Navbar;
