import { styled } from "styled-components";

const PreLoaderGif = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(/images/desigual-lab-tipografia.gif);
  background-size: cover;
  background-repeat: no-repeat;
`;

const MainContainer = styled.div<{
  currentTopic: number;
}>`
  width: 100vw;
  height: 93.75vw;
  display: flex;
  gap: 4.2vw;
  animation: fadeIn 5s;
  background-image: ${(props) =>
    props.currentTopic !== 0 ? "url(/images/desig-3.jpg)" : "url(/images/desig-3.jpg)"};
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ContentContainer = styled.div<{
  currentTopic: number;
}>`
  width: 72.5vw;
  display: flex;
  flex-direction: column;
  gap: 4.2vw;
  animation: ${(props) =>
    props.currentTopic !== 0 ? "fadeIn 2s" : "none"};
  
`;

const ContentTop = styled.div<{
  currentTopic: number;
}>`
  width: 59.17vw;
  height: 59.17vw;
  border-top-right-radius: 20vw;
  background-image: ${(props) =>
    props.currentTopic === 0 ? "url(/images/desig-3.jpg)" : "none"};
  background-color: ${(props) => (props.currentTopic === 0 ? "none" : "rgb(255, 255, 255, 0.3)")};
  background-size: cover;
  background-repeat: no-repeat;
`;

const ContainerBottom = styled.div`
  height: 30.38vw;
  display: flex;
  align-items: flex-end;
`;

const ContentBottomBox = styled.div`
  height: 30.38vw;
`;

const ContentBottom = styled.div<{
  currentTopic: number;
}>`
  width: 59.17vw;
  height: 23.3vw;
  border-bottom-right-radius: 20vw;
  background-color: ${(props) => (props.currentTopic === 0 ? "#427ef7" : "#fff")};
  opacity: 0.3;
`;

const ContentPoint = styled.div<{
  currentTopic: number;
}>`
  width: 13.33vw;
  height: 13.33vw;
  border-radius: 13.33vw;
  background-color: ${(props) => (props.currentTopic === 0 ? "#427ef7" : "#fff")};
  opacity: 0.3;
`;

export const Styles = {
  PreLoaderGif,
  MainContainer,
  ContainerBottom,
  ContentBottomBox,
  ContentBottom,
  ContentContainer,
  ContentTop,
  ContentPoint
}

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
