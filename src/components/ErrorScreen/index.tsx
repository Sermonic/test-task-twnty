import { useEffect } from "react";

import { StyledLink } from "./styled";

type IErrorProps = {
  error: Error;
};

export default function ErrorScreen({ error }: IErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <h1>Something went wrong!</h1>
      <StyledLink href={"/"}>Go home</StyledLink>
    </main>
  );
}
