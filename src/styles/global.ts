import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
    body, html {
        background: rgb(247, 250, 252);
        width: 100vw;
    }
 `;
