import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.backgroundColors.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1,
    p {
      color: ${({ theme }) => theme.textColors.primary};
    }
  }
`;

export default GlobalStyles;
