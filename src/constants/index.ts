import { NavbarLink } from "@/types";

export const apiUrl = "https://api.themoviedb.org/3";

export const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjM2OTc4OTQwNDM4MWE5OGJjNDc0ZjBjNjNiYmJlMCIsInN1YiI6IjY1NTM1NDA4ZWE4NGM3MTA5NGZmNGE0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E1duiuy8LYmoBgDs85yMB9ji-4gyMLrVG2fs6LLq-rg",
};

export const themes = [
  {
    value: "light",
    icon: "/assets/icons/sun.svg",
  },
  {
    value: "dark",
    icon: "/assets/icons/moon.svg",
  },
];

export const navbarLinks: NavbarLink[] = [
  {
    id: 1,
    route: "/",
    label: "Home",
  },
  {
    id: 2,
    route: "/contact",
    label: "Contact",
  },
  {
    id: 3,
    route: "/movies",
    label: "Movies",
  },
];
