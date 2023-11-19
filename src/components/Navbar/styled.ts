import styled from "styled-components";

import { styledButton } from "@/styles/mixins";

export const NavbarContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.backgroundColors.primaryDarken};
  color: ${({ theme }) => theme.textColors.primary};
  box-shadow: rgba(100, 100, 111, 0.2) 0 10px 30px 0;
  justify-content: space-between;
  padding: 25px;
  font-size: 24px;
`;

export const Navigation = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: ${({ theme }) => theme.textColors.primary};
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const NavLinks = styled.div<{ isOpen: boolean }>`
  ${styledButton};

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
