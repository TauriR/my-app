import React from 'react';
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Login = () => {
    const paperStyle = { padding: '20px 30px', height: '100%', width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#0040D8' }
    const btnStyle = { margin: '8px 0' }
    const textFieldStyle = { margin: '8px 0' }
    const initialValues = {
        email: '',
        password: '',
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })



    const onSubmit = (values, props) => {
        const emailInput = document.querySelector("#emailField").value;
        const passwordInput = document.querySelector("#passwordField").value;
        console.log(emailInput);
        if (emailInput && passwordInput) {
            if (emailInput === JSON.parse(localStorage.getItem('user')).email) {
                if (passwordInput === JSON.parse(localStorage.getItem('user')).password) {
                    window.location.href = "/logged"
                } else {
                    alert("Wrong password")
                }
            } else {
                alert("Wrong email")
            }
        } else {
            alert("Wrong input")
        }
        setTimeout(() => {
            localStorage.getItem('user')
            localStorage.getItem(values);
            props.resetForm()

        }, 2000)

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
                        <Form>
                            <Field id="emailField" as={TextField} style={textFieldStyle} label='Email' name="email" placeholder='Enter your Email' fullWidth helperText={<ErrorMessage name="email" />} />
                            <Field id="passwordField" as={TextField} style={textFieldStyle} label='Password' name="password" placeholder='Enter your password' type='password' fullWidth helperText={<ErrorMessage name="password" />} />
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