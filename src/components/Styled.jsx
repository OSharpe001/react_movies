import styled from "styled-components";

export const Container = styled.div`
width: 100%;
margin: auto;
text-align: center;
border-radius: 16px;
background-image: linear-gradient(to left, rgb(0, 127, 255) 0%, rgb(0, 255, 255) 100%);
`

export const Input = styled.input`
    width: 30ch;
    text-align: center;
    font-size: 14pt;
    display: block;
    margin: 20px auto 0;
    border-radius: 16px;
`

export const ButtonInput = styled.input`
    width: 30ch;
    font-size: 14pt;
    display: block;
    cursor: pointer;
    margin: 20px auto 0;
    border-radius: 16px;

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
        text-decoration: underline;
    }
`

export const Forms = styled.form`
    margin: 10px auto;
    border-radius: 16px;
    border: 2px solid blue;
    padding: 10px;
    background-image: linear-gradient(to right, rgb(0, 0, 255) 30%, rgb(0, 127, 255) 70%, rgb(0, 255, 255) 100%);
`

export const FormH2 = styled.h2`
    color: aliceblue;
    font-size: 20pt;
    margin-top: 0;
    text-shadow: 2px 1px #000;
`

export const Title = styled.h1`
    color: aliceblue;
    margin: 20px auto 10px;
    min-width: inherit;
    font-size: 3em;
    text-decoration: underlined;
    border-radius: 16px;
    background-image: radial-gradient(indigo, violet);
    border: 2px solid red;
`

export const Info = styled.h3`
    font-size: 16pt;
    text-align: left;
    margin: 10px 20px;
    text-shadow: 1px 1px 10px aliceblue;
`

export const Image = styled.img`
    height: 45vh;
`

export const Button = styled.button`
    width: max-content;
    font-size: 12pt;
    display: block;
    cursor: pointer;
    margin: 20px auto 0;
    border-radius: 16px;

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
        text-decoration: underline;
    }
`