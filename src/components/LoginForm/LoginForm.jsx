import { Formik, Form } from 'formik';

import { Title, LoginLabel, InputTitle, LoginBtn } from './LoginForm.styled';

export const LoginForm = () => {
    

    const handleSubmitLogin = ({email, password}, { resetForm }) => {
        console.log(email, password);
        // onSubmit({email, password});
        resetForm();
    }

    return (

        <div>
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
                    <LoginBtn type="submit">Log in</LoginBtn>
                </Form>
            </Formik>
        </div>
    )
};
