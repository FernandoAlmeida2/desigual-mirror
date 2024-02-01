import { styled } from "styled-components";

const PreLoaderGif = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(/images/desigual-lab-tipografia-faster.gif);
  background-size: contain;
  background-repeat: no-repeat;
`;

const MainContainer = styled.div<{
  currentTopic: number;
}>`
  width: 100vw;
  height: 93.75vw;
  display: flex;
  gap: 3.28vw;
  padding: 2.34375vw;
  animation: fadeIn 5s;
  background-image: ${(props) =>
    props.currentTopic === 0
      ? "url(/images/cover-top-1.png)"
      : "url(/images/cover-top-2.png)"};
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const LogoPMF = styled.img`
  position: fixed;
  right: 2.73vw;
  top: 2.73vw;
  width: 9.37vw;
  opacity: 0.5;
`;

const ContentContainer = styled.div<{
  currentTopic: number;
}>`
  width: 71.5vw;
  display: flex;
  flex-direction: column;
  gap: 3.28vw;
  animation: ${(props) => (props.currentTopic !== 0 ? "fadeIn 2s" : "none")};
`;

const ContentTop = styled.div<{
  currentTopic: number;
}>`
  width: 52.34vw;
  height: 52.34vw;
  border-top-right-radius: 18vw;
  background-color: ${(props) =>
    props.currentTopic === 0 ? "none" : "rgb(229, 196, 0, 0.7)"};
  background-size: cover;
  background-repeat: no-repeat;
  border: ${(props) => props.currentTopic === 0 ? "border: 0.4vw solid #fff" : "none"};
`;

const TitleText = styled.div`
  font-size: 5.5vw;
  line-height: 5vw;
  color: #fff;
  margin: 25vw 0 0 2.19vw;
`;

const ContainerBottom = styled.div`
  height: 27.34vw;
  display: flex;
  align-items: flex-end;
`;

const ContentBottomBox = styled.div`
  height: 27.34vw;
`;

const ContentBottom = styled.div<{
  currentTopic: number;
}>`
  width: 52.34vw;
  height: 21.4vw;
  border-bottom-right-radius: 18vw;
  background-image: ${(props) =>
    props.currentTopic === 0
      ? "url(/images/cover-bottom-1.png)"
      : "url(/images/cover-bottom-2.png)"};
  background-size: cover;
  background-repeat: no-repeat;
  border: ${(props) => props.currentTopic === 0 ? "border: 0.4vw solid #fff" : "none"};
`;

const ContentPoint = styled.div<{
  currentTopic: number;
}>`
  width: 13.125vw;
  height: 13.125vw;
  background-color: ${(props) =>
    props.currentTopic === 0 ? "none" : "rgb(229, 196, 0, 0.9)"};
  border: ${(props) => props.currentTopic === 0 ? "border: 0.4vw solid #fff" : "none"};
  border-radius: 13.33vw;
`;

export const Styles = {
  PreLoaderGif,
  MainContainer,
  TitleText,
  LogoPMF,
  ContainerBottom,
  ContentBottomBox,
  ContentBottom,
  ContentContainer,
  ContentTop,
  ContentPoint,
};

/* Enable hover only on non-touch devices */
/* @media (hover: hover) and (pointer: fine) {
  .card:hover {
    background: rgba(var(--card-rgb), 0.1);
    border: 1px solid rgba(var(--card-border-rgb), 0.15);
  }

  .card:hover span {
    transform: translateX(4px);
  }
}

@media (prefers-reduced-motion) {
  .card:hover span {
    transform: none;
  }
} */

/* Mobile */
/* @media (max-width: 700px) {
  .main {

  }
} */

/* Tablet and Smaller Desktop */
/* @media (min-width: 701px) and (max-width: 1120px) {
  .main {

  }
} */
