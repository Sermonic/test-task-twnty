import React from "react";

import { LoaderContainer, LoaderSpinner } from "./styled";

export default function Loader() {
  return (
    <LoaderContainer>
      <LoaderSpinner />
    </LoaderContainer>
  );
}
