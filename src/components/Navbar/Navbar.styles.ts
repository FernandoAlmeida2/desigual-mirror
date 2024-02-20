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
  animation: fadeIn 1s;
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;
`;

const NavItem = styled.div<{
  isSelected: boolean;
}>`
  width: 22.11vw;
  height: 4vw;
  font-size: 1.1vw;
  font-weight: 300;
  padding-left: 1vw;
  color: ${(props) => props.isSelected ? "rgb(229, 196, 0, 1)" : "#000"};
  background-color: ${(props) => props.isSelected ? "rgb(0, 0, 0, 0.7)" : "rgb(229, 196, 0, 0.7)"};
  border-bottom: 0.2vw solid #d3b404;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.isSelected ? "#000" : "rgb(229, 196, 0)"};
  }
`;

const NavTitle = styled.div`
  width: 20vw;
  font-size: 1.2vw;
  color: #F2D201;
  padding: 1.5vw 0 1vw 0;
  font-weight: 300;
`;

export const Styles = {
  Container,
  Logo,
  MenuIcon,
  Navbar,
  NavItem,
  NavTitle,
};
