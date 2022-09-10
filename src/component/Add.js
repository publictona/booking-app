import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import { Add as AddIcon } from '@mui/icons-material';
import { Avatar, Box ,Button,ButtonGroup,Stack,TextField,Tooltip, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Modal from '@mui/material/Modal'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EditIcon from '@mui/icons-material/Edit';

const SytledModal = styled(Modal)({
  display:"flex",
  alignItems :"center",
  justifyContent :"center"
})
 const UserBox = styled(Box)({
  display:"flex",
  alignItems :"left",
  gap:"10px",
  marginBottom:'20px',
  paddingTop :'4px'
 
})


const Add = () => {
  const [open , setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (

    <>
      <Tooltip onClick={handleOpen}  
      title="Add" sx={{ position: "fixed", bottom: 25  ,left :10, ml:'10px'}}>
        <Fab color="secondary" aria-label="add">
          <AddIcon  />
        </Fab>
      </Tooltip>
      
      
      
      <SytledModal 
        hideBackdrop
        open={open}
        onClose={handleClose}
         
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box  width ={500} boxShadow={3} p={3} height={400} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
        
          <Typography varient ="h2"  fontSize={30} color={"gray"} textAlign='center'>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
            src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
          alt=""
          sx={{width:30, height:30}}
            />
            <Typography
              fountWeight={600} varient="span"> Sushma Landge</Typography>
          </UserBox>

          <TextField
          id="standard-multiline-static"
          
          multiline
          rows={3}
          placeholder ="Write here Your Post ..."
          variant="standard"
        />
        <Stack fullWidth direction = "row"  gap={1} mt={2} mb={3}>
          <EmojiEmotionsIcon color='primary'/>
          <PersonAddIcon color='secondary'/>
          <AddAPhotoIcon color ='success'/>
          <EditIcon color ='error'/>

</Stack>

<ButtonGroup p={7} fullWidth  color="secondary" variant="contained" aria-label="outlined button group">
  <Button  onClick={handleClose}
  >Post </Button>
  <Button sx={{Width:"100px"}}><DateRangeIcon/></Button>
  
      </ButtonGroup>
        




        </Box>
      </SytledModal>

      

    </>
  )
}

export default Add