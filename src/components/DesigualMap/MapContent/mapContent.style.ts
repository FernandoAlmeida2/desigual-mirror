import { styled } from "styled-components";

const Container = styled.div`
  width: 41.11vw;
  max-width: 41.11vw;
  height: 100vh;
  z-index: 1;
`;

const NavBar = styled.div`
  display: flex;
`;

const NavItem = styled.div<{
  isSelected: boolean;
}>`
  height: 2.92vw;
  width: 4.86vw;
  border: ${(props) => props.isSelected ? "0.1vw solid #d5d5d5" : "none"};
  color: ${(props) => props.isSelected ? "#aaa" : "#FF5722"};
  border-bottom: hidden;
  border-radius: 0.3vw;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Styles = {
  Container,
  NavBar,
  NavItem
};
