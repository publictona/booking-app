import { Box, Stack } from '@mui/system'
import React ,{useState} from 'react'
import Feed from './component/Feed'
import Navbar from './component/Navbar'
import Rightbar from './component/Rightbar'
import Sidebar from './component/Sidebar'
import Add from "./component/Add"
import { createTheme, ThemeProvider } from '@mui/material'

const App = () => {

  // const  [mode , setMode] = useState("dark")
  // const darkTheme = createTheme({
  //   palette :{
  //     mode:mode,
  //   }
  // })





  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="2" spacing={3} justifyContent="space-between" >
      <Sidebar  />
      <Feed></Feed>
      <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  )
}

export default App
