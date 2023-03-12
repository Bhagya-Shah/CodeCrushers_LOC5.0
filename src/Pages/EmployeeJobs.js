import * as React from 'react';
import { Link } from 'react-router-dom'
import {useRef,useState} from 'react'
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, AlertTitle } from '@mui/material';

const theme = createTheme();

export default function EmployeeJobs() {

    const first = useRef(null)
    const second = useRef(null)
    const third = useRef(null)
    const fourth = useRef(null)
    const fifth = useRef(null)
    const sixth = useRef(null)
    const [alert, setAlert] = useState()
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
          const company = first.current.value
          const category = second.current.value
          const domain = third.current.value
          const desc = fourth.current.value
          const location = fifth.current.value
          const salary = sixth.current.value
          const token = localStorage.getItem('authToken')
          const res = await fetch('https://codecrushersloc50-production.up.railway.app/api/employee/filter',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              'Authorization':`Bearer ${token}`
            }
          })
          const data = await res.json();
          console.log(data);
          if(data.msg){
            setAlert(data.msg)
            console.log(data.msg)
            // {()=>{alert("yes")}}
            return 
          }
          else if(data.userId){
            navigate('/employeeDash')
          }
        } catch (error) {
          console.log(error);
          navigate('/')
        }
      }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 5,
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
                        Employee Jobs
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {/* <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="skills"
                            label="Company"
                            name="company"
                            autoComplete="company"
                            helperText="Enter the company name"
                            autoFocus
                            inputRef={first}
                        /> */}
                        {/* <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="category"
                            label="category"
                            id="category"
                            helperText="Category"
                            inputRef={second}
                        /> */}

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="domain"
                            label="Domain"
                            id="domain"
                            helperText="Domain"
                            inputRef={third}
                        />
                        
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="location"
                            label="Location"
                            id="location"
                            helperText="Company's Location"
                            inputRef={fourth}
                        />
                        {/* <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="desc"
                            label="Description"
                            id="desc"
                            helperText="Job Description"
                            inputRef={fifth}
                        /> */}
                        {/* <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="salary"
                            label="Salary"
                            id="salary"
                            helperText="Salary"
                            inputRef={sixth}
                        /> */}
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Get Jobs
                        </Button>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </ThemeProvider>
    );
}