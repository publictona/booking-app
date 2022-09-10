import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia ,Checkbox,Typography} from '@mui/material'
import React from 'react'

import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Post = () => {
  return (
    <div   m={5} flex={6} p={2}>

<Card sx={{margin:5}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shivaji  Patel"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="500"
        
        
        image="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        बाघ या व्याघ्र जंगल में रहने वाला मांसाहारी स्तनधारी पशु है। यह अपनी प्रजाति में सबसे बड़ा और ताकतवर पशु है। यह तिब्बत, श्रीलंका और अंडमान निकोबार द्वीप-समूह को छोड़कर एशिया के अन्य सभी भागों में पाया जाता है। यह भारत, नेपाल, भूटान, कोरिया और इंडोनेशिया में अधिक संख्या में पाया जाता
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite  sx={{color :"red" ,size:"large"}}/>} />

        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
    
    </div>
  )
}

export default Post