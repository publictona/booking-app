import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box
      flex={4} p={2}
      sx={{ display: { xs: "none", sm: "block" } }}>

      <Box position="fixed">
        <Typography varient="h5" fontWeight={300} fontSize={27} pb={1} >Online Friends</Typography>



        <AvatarGroup max={7} pb={3}>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1641639387738-506e5eb0ea6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1633212333146-1541ff8b0879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1898&q=80" />
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1608147152875-b0eb0c53d491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" />
          <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1522097191880-ae2a4e8b0a4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
          <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1532364061916-8ae9722ea30f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80" />
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1608147152875-b0eb0c53d491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" />
          <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1522097191880-ae2a4e8b0a4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
          <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1532364061916-8ae9722ea30f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80" />
        </AvatarGroup>

        <Typography pb={2} pt={1} varient="h6" fontWeight={300} fontSize={27}  >Latest Photos</Typography>
        <ImageList  sx={{ width: 500, height: 450 }}  cols={2} rowHeight={164}>
          <ImageListItem  >
            <img
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
              alt=""
            />
          </ImageListItem>

          <ImageListItem pl={5}>
            <img
              src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
              alt=""
            />
          </ImageListItem>

          <ImageListItem>

            <img
              src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62'
            alt=""
            />
          </ImageListItem>

          <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
          alt=""
          />
        </ImageListItem>

   </ImageList>

   <Typography varient="h5" fontWeight={300} fontSize={27} pb={1} pt={2} >Latest Chat</Typography>


   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1633212333146-1541ff8b0879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1898&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
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
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1641639387738-506e5eb0ea6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1522097191880-ae2a4e8b0a4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

    </Box>
      </Box >
  )
}

export default Rightbar