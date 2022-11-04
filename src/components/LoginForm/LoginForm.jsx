import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import authOperetions from 'redux/auth/authOperations';
import Button from '@mui/material/Button';

import { Title, LoginLabel, InputTitle, Box } from './LoginForm.styled';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmitLogin = ({email, password}, ) => {
        console.log(email, password);
        dispatch(authOperetions.logIn({ email, password }));
    }

    return (

        <Box>
            <Title>Log in</Title>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmitLogin}
                >
                <Form>
                    <InputTitle>Email</InputTitle> 
                    <LoginLabel
                        name="email"
                        type="email"
                    />
                    <InputTitle>Password</InputTitle> 
                    <LoginLabel
                        name="password"
                        type="password" />
                    <Button variant="contained" color="error" size="small" type="submit">Log in</Button>
                </Form>
            </Formik>
        </Box>
    )
};
