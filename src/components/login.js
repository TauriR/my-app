import React from 'react';
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const Login = () => {
    const paperStyle = { padding: '20px 30px', height: '100%', width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#0040D8' }
    const btnStyle = { margin: '8px 0' }
    const textFieldStyle = { margin: '8px 0' }
    return (
        <Grid>
            <Paper elevatin={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><VpnKeyIcon /></Avatar>
                    <h2>Log In</h2>
                </Grid>
                
                <TextField style={textFieldStyle} label='Username' placeholder='Enter your username' fullWidth required />
                <TextField style={textFieldStyle} label='Password' placeholder='Enter your password' type='password' fullWidth required />
                <Button type='Submit' variant="contained" color='primary' style={btnStyle} fullWidth >Sign In</Button>
                <Typography>Do you have Account?
                    <Link href="/signup"> Register</Link>
                </Typography>

            </Paper>
        </Grid>
    )
}

export default Login;