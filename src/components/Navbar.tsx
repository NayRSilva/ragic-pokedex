import styled, { createGlobalStyle } from "styled-components"
import { Link } from "../routes"

const Header = styled.header`
  padding: 0.8rem 0.4rem;
  background: linear-gradient(180deg, #83becd, #b8e3d77a);
  width: 100%;

`

const NavList = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  padding: 0;
  list-style-type: none;

  a {
    text-decoration: none;
    color: #03303b;

    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: #83becd;

    transition: 0.1s;
    transform: none;
    box-shadow: none;

    &:hover {
      background: #72a9b8;
    }
  }
`

const NavbarParentStyle = createGlobalStyle`
	*:has(> ${Header}) {
		// give parent enough of a margin to space out header.
		// link font size + link y margin + navbar y margin
		padding-top: calc(1.0rem + 2*0.5rem + 2*0.8rem);
	}
`

const HomeLinkStyle = styled.div`
  margin: 10px 20px
  
`

export const Navbar = () => {
  return (
    <Header>
      <NavbarParentStyle />
      <NavList>
        <Link to='/'>
          <HomeLinkStyle>
            Home
          </HomeLinkStyle>
        </Link>
      </NavList>
    </Header>
  )
}
