import { Formik, Form } from 'formik';
import { Title, RegisterLabel, InputTitle, RegisterBtn } from './RegisterForm.styled';

export const RegisterForm = () => {

    const handleSubmitRegister = (values, { resetForm }) => {
        console.log(values);
        // onSubmit(values);
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