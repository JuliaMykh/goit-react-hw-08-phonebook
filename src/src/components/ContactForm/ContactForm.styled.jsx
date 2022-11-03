import styled from "@emotion/styled";

export const LabelForm = styled.label`
    margin-right: 10px;
     border-radius: 5px;
`;

export const SpanForm = styled.span`
    font-weight: 700;
    margin-right: 5px;
`;

export const ButtonForm = styled.button`
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    background-color: white;
    border: solid #d95c5c;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        color: white;
        background-color:#d95c5c;
        transform: scale(1.1);
    }
`;

export const Title = styled.h1`
    font-size: 26px;
    text-transform: uppercase;
    font-weight: 700;
    color: #be1111;
    margin-bottom: 30px;
`;