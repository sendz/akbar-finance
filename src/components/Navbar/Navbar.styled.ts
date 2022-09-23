import styled from "styled-components";

export const NavbarEl = styled.nav`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #3C4BA6;
  padding: 24px 8px;
  
  @media only screen and (min-width: 1366px) {
    padding: 64px 60px;
  }
`

export const NavHeader = styled.section`
  font-size: 16px;
  font-weight: 700;
`

export const NavList = styled.ol`
  margin: 0;
`

export const NavListItem = styled.li`
  list-style: none;
  display: inline;
  & > a {
    padding: 4px 8px;
    text-decoration: none;
    color: white;
    border-radius: 4px;
    &:hover {
      background: rgba(255,255,255, 0.2);
    }
    
    @media only screen and (min-width: 1366px) {
      margin: 0 48px;
    }
  }
`