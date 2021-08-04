import React from 'react'
import './header.css'
import {
  createTheme,
  TextField,
  ThemeProvider,
  MenuItem,
} from '@material-ui/core'
import categories from '../../data/category'

function Header() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  })

  return (
    <div className='header'>
      <span className='title'>Atuba Dictionary</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField id='standard-basic' label='standard' />
          <TextField
            id='standard-select-currency'
            select
            label='select'
            helperText='Please select your currency'
          >
            <MenuItem>english</MenuItem>
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
