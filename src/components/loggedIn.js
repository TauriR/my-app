import { Grid, Paper } from '@mui/material';
import React from 'react';

const LoggedIn = () => {
    const paperStyle = { padding: 20, height: '100%', width: 250, margin: "20px auto" }

    return (
        <Grid>
            <Paper elevatin={10} style={paperStyle}>
                <h1>Yay, you’re logged in!</h1>
            </Paper>
        </Grid>
    )
}

export default LoggedIn;