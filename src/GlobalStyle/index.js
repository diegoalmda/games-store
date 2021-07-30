import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background-color: #ffffff;
    color: #272727;
    overflow-x: hidden;
  }
`
export default GlobalStyle;