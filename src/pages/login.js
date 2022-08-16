import React from 'react';
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { loginForm } from '../components/loginForm';

const Login = () => {
    const paperStyle = { padding: '20px 30px', height: '100%', width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#0040D8' }
    const btnStyle = { margin: '8px 0' }
    const textFieldStyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
        console.log(props)
    }
    return (
        <Grid>
            <Paper elevatin={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><VpnKeyIcon /></Avatar>
                    <h2>Log In</h2>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form action='localhost:3000' method='GET'>
                            {loginForm.map(input =>
                                <Grid>
                                    <TextField key={loginForm} style={textFieldStyle} {...input} />
                                </Grid>
                            )}
                            <Button type='Submit' variant="contained" disabled={props.isSubmitting} color='primary' style={btnStyle} fullWidth >{props.isSubmitting ? "Loading" : "Sign in"}</Button>
                            <Typography>Do you have Account?
                                <Link href="/signup"> Register</Link>
                            </Typography>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Login;