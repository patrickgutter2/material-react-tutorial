import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { TextField } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border:0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})


function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root }>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel 
      control={<Checkbox 
        checked={checked}
        icon={<SaveIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e)=>setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label="Testing Material UI"
    />

      

  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonStyled />
        <TextField 
          variant="filled"
          color="secondary"
          type="email"
          label="The Time"
          value="test@test.ch"
          placeholder="test@test.ch"
          >
        </TextField>
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
        <Button 
          startIcon={<SaveIcon />}>
              Save
          </Button>
          <Button 
          startIcon={<DeleteIcon />}>
              Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
