import styled from "styled-components";

export const HeroEl = styled.header`
  display: flex;
  flex-direction: row;
  margin: 0;
  color: white;
  background: #3C4BA6;
  justify-content: space-between;
  align-items: center;
  padding: 24px 8px;

  @media only screen and (min-width: 1365px) {
    padding: 64px 60px;
  }
  
  & img {
    max-width: 360px;
  }
`