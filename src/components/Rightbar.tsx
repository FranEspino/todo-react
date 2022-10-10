import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  List,
} from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Tus amigos
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/240083?v=4"
          />
          <Avatar
            alt="Travis Howard"
            src="https://avatars.githubusercontent.com/u/92839?v=4"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://avatars.githubusercontent.com/u/3438503?v=4"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://avatars.githubusercontent.com/u/55170175?v=4"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://avatars.githubusercontent.com/u/42798758?v=4"
          />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Publicaciones recientes
        </Typography>
        <ImageList rowHeight={90} cols={3} gap={5}>
          <ImageListItem>
            <img src="https://i.blogs.es/d535e9/captura-de-pantalla-2022-04-11-a-las-10.24.25/1366_2000.jpeg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://i.redd.it/5m3bqazaqby61.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://i.redd.it/dw27biuq94e71.jpg" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Publicaciones guardadas
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/62855678?v=4" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://avatars.githubusercontent.com/u/14153276?v=4" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://avatars.githubusercontent.com/u/433725?v=4" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
