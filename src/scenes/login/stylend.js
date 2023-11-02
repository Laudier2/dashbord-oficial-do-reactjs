import styled from "styled-components";
import img from "./img/bg9.jpg"

export const Login2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: url(${img}) no-repeat;
    background-size: cover;
    background-position-y: -150px;

    & div {
        margin-top: 45px;
    }

    & a {
        text-decoration: none;
        margin-top: 25px;
        color: #fff;
        margin-left: 15px;
        border: 1px solid;
        border-radius: 10px;
        padding: 7px;
        background: #d6fcf980;
        border: none;
    }

    & a:hover {
        background: rgb(14, 194, 14);
    }

    @media (max-width: 768px) {
        & a {
            border: 2px solid #ffffff80;
            color: black;
            background: gray;
        }
    }

`

export const FormBox = styled.div`
    position: relative;
    width: 400px;
    height: 450px;
    background: transparent;
    border: 2px solid #ffffff80;
    border-radius: 20px;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 2rem;
    color: #fff;
    text-align: center;
`

export const InputBox = styled.div`
    position: relative;
    margin: 30px 0;
    width: 310px;
    border-bottom: 2px solid #fff;

    & input{
        width: 100%;
        height: 50px;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1em;
        padding: 0 -5px 0 0;
        color: #fff;
        border-radius: 5px;
        text-align: justify;
    }

    & input:focus ~ label {
        top: -12px;
    }

    & input:valid ~ label {
        top: -12px;
    }

    & label{
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        color: #fff;
        font-size: 1em;
        pointer-events: none;
        transition: .5s;
    }
`

export const ButtonBox = styled.button`
    width: 100%;
    height: 48px;
    border-radius: 48px;
    background: #15daca80;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;

    &:hover {
        background: rgb(14, 194, 14);
    }
`
