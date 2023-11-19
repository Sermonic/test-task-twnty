import { useState } from "react";

import Switch from "@/components/Switch";

import { navbarLinks } from "@/constants";

import { NavbarLink } from "@/types";

import { NavbarContainer, Navigation, HamburgerMenu, NavLinks } from "./styled";

type INavbarProps = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

export default function Navbar({ toggleTheme, isDarkTheme }: INavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavbarContainer>
      <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </HamburgerMenu>
      <Navigation>
        {navbarLinks.map(({ id, route, label }: NavbarLink) => {
          return (
            <NavLinks key={id} isOpen={isOpen} href={route}>
              {label}
            </NavLinks>
          );
        })}
      </Navigation>
      <Switch toggleFunc={toggleTheme} isToggle={isDarkTheme} />
    </NavbarContainer>
  );
}
