import Link from "next/link";
import styled from "styled-components";

import { styledButton } from "@/styles/mixins";

export const StyledLink = styled(Link)`
  ${styledButton}
`;
