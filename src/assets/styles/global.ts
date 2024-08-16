import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:${({ theme }) => theme.colors.backgroundColor};
    color:${({ theme }) => theme.colors.textColor};
    -webkit-font-smoothing:antialiased;
}

body, input-security, textarea, button{
    font-family:'Roboto Condensed', sans-serif;
    font-weight:500;
    font-size:1rem;
}

fieldset, button{
    border:none;
}

button{
    cursor: pointer;
}

a{
    text-decoration:none;
}

li{
    list-style:none;
}

`