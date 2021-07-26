import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --dark: #0D1117;
    --gray: #524141;
    font-size: 10px;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-color: var(--dark);
  }
`
