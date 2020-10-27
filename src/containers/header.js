import React, {useState} from "react";
import { Header } from "../components"; 
import * as ROUTES from "../constants/routes";




export function HeaderContainer({ children }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src="/images/GESC_logo_white.png"
          alt="GESC"
        />
        {click? <Header.Close size="2x" onClick={handleClick}/>: <Header.Hamburger size="2x" onClick={handleClick}/>
        }
        <Header.NavMenu active={click}>
          <Header.NavLink to={ROUTES.HOME}>Home</Header.NavLink>
          <Header.NavLink to={ROUTES.HOME}>Who we are</Header.NavLink>
          <Header.NavLink to={ROUTES.HOME}>Upcoming Events</Header.NavLink>
          <Header.NavLink to={ROUTES.HOME}>Contact Us</Header.NavLink>
        </Header.NavMenu>
 
      </Header.Frame>
      {children}
    </Header>
  );
}