import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #FFF;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .wrapper {
        width: 100%;
        height: 100%;
        padding-top: 5.8125rem;
        padding-bottom: 3.625rem;   
    }

`