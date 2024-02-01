import { styled } from "styled-components";

const ContentTop = styled.div<{
  currentTopic: string;
}>`
  width: 52.34vw;
  height: 52.34vw;
  border-top-right-radius: 18vw;
  background-color: ${(props) =>
    props.currentTopic === "none" ? "none" : "rgb(229, 196, 0, 0.7)"};
  border: ${(props) =>
    props.currentTopic === "none" ? "0.4vw solid #fff" : "none"};
  animation: ${(props) =>
    props.currentTopic === "none" ? "none" : "fadeContentIn 1s"};
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;
  @keyframes fadeContentIn {
    0% {
      background-color: rgb(229, 196, 0, 0);
    }
    100% {
      background-color: rgb(229, 196, 0, 0.7);
    }
  }
`;

const TitleText = styled.div`
  font-size: 5.5vw;
  line-height: 5vw;
  color: #fff;
  margin: 25vw 0 0 2.19vw;
`;

export const Styles = {
  ContentTop,
  TitleText,
};
