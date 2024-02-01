"use client";

import NavBar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Topic1 from "@/components/Topic1/Topic1";
import { Styles } from "./page.styles";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [preLoading, setPreLoading] = useState(true);
  const [currentTopic, setCurrentTopic] = useState(0);

  function changeTopic(topic: number) {
    setCurrentTopic(topic);
  }

  useEffect(() => {
    setTimeout(() => {
      setPreLoading(false)
    }, 3900);
  }, []);

  if (preLoading) return <Styles.PreLoaderGif></Styles.PreLoaderGif>;

  return (
    <>
      <Styles.MainContainer currentTopic={currentTopic}>
        <Styles.LogoPMF
          src="/images/logos/Logo_PMF_Ver_Mono_Branco.svg"
          alt="logo pmf"
        />
        <NavBar changeTopic={changeTopic} currentTopic={currentTopic} />
        <Styles.ContentContainer currentTopic={currentTopic}>
          <Styles.ContentTop currentTopic={currentTopic}>
            {currentTopic === 1 ? (
              <Topic1 />
            ) : (
              <Styles.TitleText>
                Por uma
                <br />
                Fortaleza
                <br />
                mais igual.
              </Styles.TitleText>
            )}
          </Styles.ContentTop>

          <Styles.ContainerBottom>
            <Styles.ContentBottomBox>
              <Styles.ContentBottom
                currentTopic={currentTopic}
              ></Styles.ContentBottom>
            </Styles.ContentBottomBox>
            <Styles.ContentPoint
              currentTopic={currentTopic}
            ></Styles.ContentPoint>
          </Styles.ContainerBottom>
        </Styles.ContentContainer>
      </Styles.MainContainer>
      <Footer />
    </>
  );
}
