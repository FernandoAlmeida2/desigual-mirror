import { styled } from "styled-components";

const Container = styled.div`
  width: 23.3vw;
  height: 86.7vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4.2vw;
`;

const Logo = styled.img`
  height: 22.3vw;
  padding: 1vw;
  margin-top: 1vw;
  background-color: rgba(255, 255, 255, 0.7);
`;

const Navbar = styled.div`
  display: flex;
  width: 21.3vw;
  height: 59.17vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  color: #fff;
  background-image: url(/images/desig-1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
`;

const NavItem = styled.div`
  width: 20vw;
  height: 4vw;
  font-size: 2.2vw;
  font-weight: 700;
  /* background-color: #427ef7;
    border-radius: 1vw; */
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
export const Styles = {
  Container,
  Logo,
  Navbar,
  NavItem,
};
