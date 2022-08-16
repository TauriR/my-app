import { Avatar, Grid, Paper, TextField, Typography, Button, Link } from '@mui/material';
import React from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Formik, Form, } from 'formik'
import * as Yup from 'yup'

import { inputFormElements } from '../components/registerFormElements';

const Signup = () => {
    const paperStyle = { padding: '20px 30px', height: '100%', width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#0040D8', margin: 10 }
    const textFieldStyle = { margin: '8px 0' }
    const btnStyle = { margin: '8px 0' }

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short name").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        password: Yup.string().min(6, "Password minimum length should be 6").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
    })

    const onSubmit = (values, props) => {

        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 1000)
    }


    return (
        <Grid>

            <Paper elevatin={10} style={paperStyle}>

                <Grid align="center">
                    <Link href="/" align="center" color="inherit"> Back to Sign In</Link>
                    <Avatar style={avatarStyle}>
                        <HowToRegIcon />
                    </Avatar>
                    <Typography variant='h4' style={textFieldStyle} >
                        Sign Up
                    </Typography>

                    <Typography style={textFieldStyle} >
                        Please fill this form to create an account
                    </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            {
                                inputFormElements.map(input =>
                                    <Grid>
                                    <TextField key={input.id} style={textFieldStyle} {...input} />
                                    </Grid>
                                )
                            }
                            <Button type='submit' variant="contained" disabled={props.isSubmitting} color='primary' style={btnStyle} fullWidth> {props.isSubmitting ? "Loading.." : "Register"} </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Signup;