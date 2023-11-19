import styled from "styled-components";
import Link from "next/link";
import { styledButton } from "@/styles/mixins";

export const StyledLink = styled(Link)`
  ${styledButton}
`;
