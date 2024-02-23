import { styled } from "styled-components";

const Container = styled.div`
  max-width: 100vw;
  height: 64vw;
  display: flex;
  justify-content: space-between;
  padding: 4vw 2.22vw 0 2.22vw;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(/images/cover-top-2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 0.3;
  }
`;

const ReturnOption = styled.div`
  position: absolute;
  top: 1.5vw;
  left: 1.5vw;
  color: green;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Styles = {
  Container,
  ReturnOption,
};
