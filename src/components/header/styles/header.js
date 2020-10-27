import styled from "styled-components";

import { Link as ReactRouterLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const Background = styled.section`
  display: flex;
  
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/IMG_9292opa.jpg"})
    top left / cover no-repeat;
  
`;

export const Container = styled.div`
  display: flex;

  height: 64px;
  padding: 18px 56px;
  justify-content: space-between;
  align-items: center;
  background-color: #02306C;
  a {
    display: flex;
  }

`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 90vh; */
    position: absolute;
    top: 92px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
    ${({ active }) => active && `
    background: #02306C;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  `}
  }

`;

export const Logo = styled.img`
  width: 300px;
  margin-right: 40px;

  @media (max-width:800px) {
    width:200px;
    height:43.250px;
    margin-right:0;
  }
  /* @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  } */
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;


export const NavLink = styled(ReactRouterLink)`
  display: block;
  font-family: 'Roboto', sans-serif;
  text-transform:uppercase;
  font-weight: bold;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    color: #E57202;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
color: white;
display:none;
   @media (max-width: 1000px) {
    display: block;

    position: absolute;
    top: 32px;
    right: 32px;
    /* transform: translate(-100%, 60%); */
    font-size: 1.8rem;
    cursor: pointer;
   }
`