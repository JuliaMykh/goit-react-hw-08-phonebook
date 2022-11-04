import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import authOperetions from 'redux/auth/authOperations';
import { Title, RegisterLabel, InputTitle, Box } from './RegisterForm.styled';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmitRegister = ({ name, email, password }, ) => {
        console.log({ name, email, password });
        dispatch(authOperetions.register({ name, email, password }));
        // resetForm();
    }

    return(
        <Box>
            <Title>Register Form</Title>
            <Formik
                initialValues={{  name: '', email: '', password: '' }}
                onSubmit={handleSubmitRegister}
            >
                <Form>
                    <InputTitle>Name</InputTitle> 
                    <RegisterLabel
                        name="name"
                        type="name"
                    />
                    <InputTitle>Email</InputTitle> 
                    <RegisterLabel
                        name="email"
                        type="email"
                    />
                    <InputTitle>Password</InputTitle> 
                    <RegisterLabel
                        name="password"
                        type="password" />
                        <Button variant="contained" color="error" size="small" type="submit">Register</Button>
                </Form>

            </Formik>
        </Box>
    )
}