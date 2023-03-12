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

export default function EmployeeForm() {

    const first = useRef(null)
    const second = useRef(null)
    const third = useRef(null)
    const fourth = useRef(null)
    const [alert, setAlert] = useState()
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
          let skills = first.current.value
          skills = skills.split(",")
          const experience = second.current.value
          const desg = third.current.value
          const company = fourth.current.value
          const token = localStorage.getItem('authToken')
          const res = await fetch('https://codecrushersloc50-production.up.railway.app/api/employee/',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              'Authorization':`Bearer ${token}`
            }
            ,body:JSON.stringify({skills,experience,desg,company})
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
                        Employee Form
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="skills"
                            label="Skills"
                            name="skills"
                            autoComplete="skills"
                            helperText="Seperate the skills by a comma"
                            autoFocus
                            inputRef={first}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="experience"
                            label="Experience"
                            id="experience"
                            helperText="Experience in years"
                            inputRef={second}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="desg"
                            label="Designation"
                            id="desg"
                            helperText="Mention previous designation"
                            inputRef={third}
                        />
                        
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="company"
                            label="Company"
                            id="company"
                            helperText="Mention company's name"
                            inputRef={fourth}
                        />
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
                            Submit
                        </Button>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </ThemeProvider>
    );
}