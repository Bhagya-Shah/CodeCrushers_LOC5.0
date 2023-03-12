import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Select, MenuItem, InputLabel, Alert, AlertTitle } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {

  
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const first = useRef('')
  const second = useRef('')
  const [alert, setAlert] = useState('')
  const third = useRef('')
  const navigate = useNavigate()


  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const name = first.current.value
      const email = second.current.value
      console.log(name);
      const res = await fetch('https://codecrushersloc50-production.up.railway.app/api/user/',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'   
        }
        ,body:JSON.stringify({name:name,email:email,password:third.current.value,role:role})
      })
      const data = await res.json();
      console.log(data);
      if(data.msg){
        setAlert(data.msg)
        console.log(data.msg)
        // {()=>{alert("yes")}}
        return 
      }
      else if(data.authToken){
        console.log(data.authToken);
        localStorage.setItem('authToken',data.authToken)
      }
      if(role=='employee'){
        navigate('/EmployeeForm')
      }
      else if(role=='employer'){
        navigate('/EmployerForm')
      }
    } catch (error) {
      console.log(error);
      navigate('/')
    }
  }
  

  const [role, setRole] = useState('Role');

  const handleChange = (event) => {
    setRole(event.target.value);
  }  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          {alert && (<Alert severity="error">
          <AlertTitle>Error</AlertTitle>
            {alert}    — <strong>check it out!</strong>
        </Alert>)}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              autoComplete="name"
              autoFocus
              inputRef={first}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={second}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Create Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={third}
            />
            <InputLabel id="demo-simple-select-standard-label" align="left">Role</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={role}
              onChange={handleChange}
              // label="Role"
            >
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
              <MenuItem value={"employee"}>Employee</MenuItem>
              <MenuItem value={"employer"}>Employer</MenuItem>
            </Select>
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              onSubmit={handleSubmit}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}