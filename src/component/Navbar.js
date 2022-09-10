import styled from '@emotion/styled'
import { AppBar, InputBase, Toolbar, Typography, Badge, Avatar, MenuItem, Menu } from '@mui/material'
import React, { useState } from 'react'
import ChildCareIcon from '@mui/icons-material/ChildCare';
import MailIcon from '@mui/icons-material/Mail'
import { teal } from '@mui/material/colors';
import NotificationsIcon from '@mui/icons-material/Notifications';
//import SearchIcon from '@mui/icons-material/Search'


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"


})
const Search = styled("div")(({ theme }) => ({

  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
  pointerEvents: 'none',
  borderRadius: "5px",
  textcolor:"black"

}))


const Icons = styled('Box')(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: 'center',
  
}));




const Navbar = () => {
  const [open, setOpen] = useState(false)



  return (
    <AppBar position='sticky' color="secondary">
      <StyledToolbar>
        <Typography varient="h6" sx={{ display: { xs: "none", sm: "block" } }} >
          <h2 >mAstiya</h2>
        </Typography>
        <ChildCareIcon sx={{ display: { xs: "block", sm: "none"  } }} />
        
        <Search > <InputBase placeholder = 'Search...' > </InputBase> </Search>
        
         

        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="action" />
          </Badge>

          <Badge badgeContent={6} color="error">
            <NotificationsIcon color="action" />
          </Badge>

          <Avatar sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1641639387738-506e5eb0ea6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"

            onClick={e => setOpen(true)} />
          <Typography variant='span' spacing='10px' > John</Typography>
        </Icons>


      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"

        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>





    </AppBar>
  );
};

export default Navbar