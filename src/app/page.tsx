"use client";

import NavBar from "@/components/NavBar/NavBar";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Topic1 from "@/components/Topic1/Topic1";
import { styled } from "styled-components";

export default function Home() {
  const [preLoading, setPreLoading] = useState(true);
  const [currentTopic, setCurrentTopic] = useState(0);

  function changeTopic(topic: number) {
    setCurrentTopic(topic);
  }

  useEffect(() => {
    setTimeout(() => setPreLoading(false), 4000);
  }, []);

  if (preLoading)
    return (
      <div className={styles.preLoader}>
        <img
          src="/images/desigual-lab-tipografia.gif"
          alt="Pre loader desigual lab"
          className={styles.preLoaderGif}
        />
      </div>
    );

  return (
    <MainContainer>
      <NavBar changeTopic={changeTopic} />
      <ContentContainer currentTopic={currentTopic}>
        <ContentTop currentTopic={currentTopic}>
          {/* <img
            src="/images/outdoor-1.jpg"
            alt="Capa desigual lab"
            className={styles.coverImg}
          /> */}
          {currentTopic === 1 && <Topic1 />}
        </ContentTop>

        <div className={styles.containerBottom}>
          <div className={styles.contentBottomBox}>
            <div className={styles.contentBottom}></div>
          </div>
          <div className={styles.contentPoint}></div>
        </div>
      </ContentContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  height: 93.75vw;
  display: flex;
  gap: 4.2vw;
  animation: fadeIn 5s;
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
  background-image: ${(props) =>
    props.currentTopic !== 0 ? "url(/images/desig-3.jpg)" : "none"};
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
