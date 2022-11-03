import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import authOperetions from 'redux/auth/authOperations';
import { Title, RegisterLabel, InputTitle, RegisterBtn } from './RegisterForm.styled';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const handleSubmitRegister = ({ name, email, password }, { resetForm }) => {
        console.log({ name, email, password });
        dispatch(authOperetions.register({ name, email, password }));
        // navigate('/contacts');
        resetForm();
    }

    return(
        <div>
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
                    <RegisterBtn type="submit">Register</RegisterBtn>
                </Form>

            </Formik>
        </div>
    )
}