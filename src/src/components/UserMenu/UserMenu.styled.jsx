import styled from "@emotion/styled";

export const UserMenuBox = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const UserMenuText = styled.p`
    font-weight: 700;
`;

export const UserMenuName = styled.span`
    font-weight: 500;
    color: #d40b0b;
`;

export const UserMenuBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    background-color:white;
    width: 80px;
    height: 25px;
    margin-left: 10px;
    border-radius: 5px;
    border: solid #d95c5c;
    cursor: pointer;
    &:hover,
    &:focus{
        color: white;
        background-color:#d95c5c;
        transform: scale(1.1);
    }
`;