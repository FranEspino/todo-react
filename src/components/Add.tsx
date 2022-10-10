import React, { useState } from "react";
import { Tooltip, Fab, Modal, Box, Typography, styled,TextField } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

const Add = () => {
  const [open, setOpen] = useState(false);

  const CustomModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  return (
    <>
      <Tooltip
        title="Crear post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(45%)", md: 30 },
        }}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => {
            setOpen(true);
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <CustomModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"white"}
          sx={{ 
            height: {xs: "50%", md: "50%"},
            width: {xs: "80%", md: "40%"},

         }}

          p={3}
          borderRadius={2}
        >
          <Typography variant="h6" color="gray">
            Crear nueva pulicacion
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        </Box>
      </CustomModal>
    </>
  );
};

export default Add;
