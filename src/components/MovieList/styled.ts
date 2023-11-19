import styled from "styled-components";

export const MovieListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieItem = styled.div`
  margin: 10px;
  padding: 25px;
  background-color: #f0f0f0;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const MovieInfo = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;
