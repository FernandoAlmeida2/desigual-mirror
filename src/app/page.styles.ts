import { styled } from "styled-components";

const PreLoaderGif = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(/images/desigual-lab-tipografia-faster.gif);
  background-size: cover;
  background-repeat: no-repeat;
`;

const MainContainer = styled.div<{
  currentTopic: string;
}>`
  width: 100vw;
  height: 93.75vw;
  display: flex;
  gap: 3.28vw;
  padding: 2.34375vw;
  animation: ${(props) =>
    props.currentTopic === "none" ? "fadeIn 1s" : "mymove 1s"};
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;

  background-image: ${(props) =>
    props.currentTopic === "none"
      ? "url(/images/cover-top-1.png)"
      : "url(/images/cover-top-2.png)"};

  @keyframes fadeIn {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes mymove {
    0% {
      background-image: url(/images/cover-top-1.png);
    }
    100% {
      background-image: url(/images/cover-top-2.png);
    }
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const LogoPMF = styled.img`
  position: absolute;
  right: 2.73vw;
  top: 2.73vw;
  width: 9.37vw;
  opacity: 0.5;
`;

const ContentContainer = styled.div`
  width: 71.5vw;
  display: flex;
  flex-direction: column;
  gap: 3.28vw;
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
  currentTopic: string;
}>`
  width: 52.34vw;
  height: 21.4vw;
  border-bottom-right-radius: 18vw;
  background-image: ${(props) =>
    props.currentTopic === "none"
      ? "url(/images/cover-bottom-1.png)"
      : "url(/images/cover-bottom-2.png)"};
  background-size: cover;
  background-repeat: no-repeat;
  border: ${(props) =>
    props.currentTopic === "none" ? "0.4vw solid #fff" : "none"};
  animation: ${(props) =>
    props.currentTopic === "none" ? "none" : "mymove-2 1s"};
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;
  @keyframes mymove-2 {
    0% {
      background-image: url(/images/cover-bottom-1.png);
    }
    100% {
      background-image: url(/images/cover-bottom-2.png);
    }
  }
`;

const ContentPoint = styled.div<{
  currentTopic: string;
}>`
  width: 13.125vw;
  height: 13.125vw;
  background-color: ${(props) =>
    props.currentTopic === "none" ? "none" : "rgb(229, 196, 0, 0.9)"};
  border: ${(props) =>
    props.currentTopic === "none" ? "0.4vw solid #fff" : "none"};
  border-radius: 13.33vw;
`;

export const Styles = {
  PreLoaderGif,
  MainContainer,
  LogoPMF,
  ContainerBottom,
  ContentBottomBox,
  ContentBottom,
  ContentContainer,
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
