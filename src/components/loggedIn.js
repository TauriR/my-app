import { Grid, Paper } from '@mui/material';
import React from 'react';

const LoggedIn = () => {
    const paperStyle = { padding: 20, height: '50vh', width: 250, margin: "20px auto" }

    return (
        <Grid>
            <Paper elevatin={10} style={paperStyle}>
                <h2>Yay, you’re logged in!</h2>
            </Paper>
        </Grid>
    )
}

export default LoggedIn;