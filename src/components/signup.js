import { Avatar, Grid, Paper, TextField, Typography, Button, Link } from '@mui/material';
import React from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Signup = () => {
    const paperStyle = { padding: '20px 30px', height: '100%', width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#0040D8', margin: 10 }
    const textFieldStyle = { margin: '8px 0' }
    const btnStyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3, "Too Short username").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
    })

    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }


    return (
        <Grid>

            <Paper elevatin={10} style={paperStyle}>

                <Grid align="center">
                    <Link href="/" align="center" color="inherit"> Back to Sign In</Link>
                    <Avatar style={avatarStyle}>
                        <HowToRegIcon />
                    </Avatar>
                    <h2>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>
                        Please fill this form to create an account
                    </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} name="username" fullWidth label='Username' placeholder="Please enter your username" helperText={<ErrorMessage name="username" />} />
                            <Field as={TextField} name="email" style={textFieldStyle} fullWidth label='Email' placeholder="Please enter your Email" helperText={<ErrorMessage name="email" />} />
                            <Field as={TextField} name="password" style={textFieldStyle} fullWidth placeholder="Please enter your password" label='Password' type='password' helperText={<ErrorMessage name="password" />} />
                            <Field as={TextField} name="confirmPassword" style={textFieldStyle} fullWidth placeholder="Please confirm your password" label='Confirm Password' type='password' helperText={<ErrorMessage name="confirmPassword" />} />
                            <Button type='submit' variant="contained" disabled={props.isSubmitting} color='primary' style={btnStyle} fullWidth> {props.isSubmitting ? "Loading.." : "Register"} </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Signup;