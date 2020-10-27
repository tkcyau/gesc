import React from "react";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import { Link as ReactRouterLink } from "react-router-dom";
import { Background, Container, Logo, Link, NavLink, NavMenu, StyledIcon} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.NavMenu = function HeaderNavMenu({ children, ...restProps }) {
  return <NavMenu {...restProps}>{children}</NavMenu>;
};


Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.NavLink = function HeaderButtonLink({ children, ...restProps }) {
  return <NavLink {...restProps}>{children}</NavLink>;
};

Header.Hamburger = function HeaderHamburgerIcon ({...restProps}) {
  return <StyledIcon {...restProps} icon={faBars} />
}

Header.Close = function HeaderHamburgerIcon ({...restProps}) {
  return <StyledIcon {...restProps} icon={faTimes} />
}

