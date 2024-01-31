import { VscMenu } from "react-icons/vsc";
import { styled } from "styled-components";

const Container = styled.div`
  height: 86.7vw;
  display: flex;
  flex-direction: column;
  gap: 2.734375vw;
  /* padding-left: 2.8125vw; */
`;

const Logo = styled.img`
  width: 21.875vw;
`;

const MenuIcon = styled(VscMenu)`
  color: #fff;
  font-size: 2.1875vw;

  &:hover {
    cursor: pointer;
    scale: 120%;
  } 
`;

const Navbar = styled.div`
  display: flex;
  height: 59.17vw;
  flex-direction: column;
  align-items: center;
`;

const NavItem = styled.div`
  width: 22.11vw;
  height: 4vw;
  font-size: 1.1vw;
  font-weight: 300;
  color: #000;
  background-color: #E6C803;
  border-bottom: 0.2vw solid #fcdf23;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #aaa7a5;
    opacity: 0.5;
  }
`;

const NavTitle = styled.div`
  width: 20vw;
  font-size: 1.3vw;
  color: #d1b502;
  padding: 1.5vw 0 1vw 0;
`;



export const Styles = {
  Container,
  Logo,
  MenuIcon,
  Navbar,
  NavItem,
  NavTitle
};
