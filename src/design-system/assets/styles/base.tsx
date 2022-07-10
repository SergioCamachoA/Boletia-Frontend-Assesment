import { css } from "styled-components"

export const Base = css`
  :root {
    --orange: #fa8942;
    --blue: #3433e7;
    --light-orange: #fa8766;
    --smoke: #f2f3f4;
    --dark-smoke: #1e2428;
  }
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--smoke);
    color: var(--dark-smoke);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  .text-orange {
    color: var(--orange);
  }
  .text-blue {
    color: var(--blue);
  }
  .text-light-orange {
    color: var(--light-orange);
  }
  .text-smoke {
    color: var(--smoke);
  }
  .text-dark-smoke {
    color: var(--dark-smoke);
  }
  .bg-orange {
    background-color: var(--orange);
  }
  .bg-blue {
    background-color: var(--blue);
  }
  .bg-light-orange {
    background-color: var(--light-orange);
  }
  .bg-smoke {
    background-color: var(--smoke);
  }
  .bg-dark-smoke {
    background-color: var(--dark-smoke);
  }
  .bg-transparent {
    background-color: transparent;
  }
`
