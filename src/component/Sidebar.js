import { Box, List, ListItemText, ListItemButton, ListItemIcon, ListItem, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PagesIcon from '@mui/icons-material/Pages';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import NightlightIcon from '@mui/icons-material/Nightlight';


const Sidebar = () => {


  return (

    <Box
      flex={2} p={2}
      sx={{ display: { xs: "none", sm: "block" } }} >



        <Box position={"fixed"} >

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#Home'>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#Pages'>
            <ListItemIcon>
              <PagesIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#Groups'>
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#MarketPlace'>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText primary="MarketPlace" />
          </ListItemButton>
        </ListItem>
      </List>

      

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#Friends'>
            <ListItemIcon>
              <Diversity1Icon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#Settings'>
            <ListItemIcon>
              <SettingsApplicationsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#Profile'>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#simple-list'>
            <ListItemIcon>
              <NightlightIcon />
            </ListItemIcon>
            <Switch />
            {/* //onChange={e => setMode(mode === "light" ? "dark" : "light")} */}
            
          </ListItemButton>
        </ListItem>
      </List>

        </Box>
    </Box>
  )
}

export default Sidebar
