import styled from "@emotion/styled";
import { Field, Form } from "formik";

export const Title = styled.h1`
    font-size: 26px;
    text-transform: uppercase;
    /* text-align: center; */
    font-weight: 700;
    color: #be1111;
    margin-bottom: 30px;
`;

export const RegisterLabel = styled(Field)`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const BoxForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InputTitle = styled.span`
    font-weight: 600;
`;

export const Box = styled.div`
    width: 320px;
    margin: 0 auto;
    padding: 50px 10px 50px 10px;
`;

// export const BoxBtn = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// export const RegisterBtn = styled.button`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-family: inherit;
//     font-size: 14px;
//     font-weight: 700;
//     background-color:white;
//     width: 80px;
//     height: 25px;
//     margin-left: 10px;
//     border-radius: 5px;
//     border: solid #d95c5c;
//     cursor: pointer;
//     &:hover,
//     &:focus{
//         color: white;
//         background-color:#d95c5c;
//         transform: scale(1.1);
//     }
// `;