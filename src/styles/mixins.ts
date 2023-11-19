import { css } from "styled-components";

export const styledButton = css`
  margin: 10px;
  padding: 10px 25px;
  background-color: ${({ theme }) => theme.buttonColors.primary};
  color: ${({ theme }) => theme.textColors.primary};
  font-size: 16px;
  border: none;
  border-radius: 7px;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #c1c1c1;
    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  }
`;
