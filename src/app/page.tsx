"use client";

import NavBar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Styles } from "./page.styles";
import Footer from "@/components/Footer/Footer";
import ContentTop from "@/components/ContentTop/ContentTop";
import DesigualMap from "@/components/DesigualMap/DesigualMap";

export default function Home() {
  const [preLoading, setPreLoading] = useState(true);
  const [currentTopic, setCurrentTopic] = useState("none");

  function changeTopic(topic: string) {
    setCurrentTopic(topic);
  }

  useEffect(() => {
    setTimeout(() => {
      setPreLoading(false);
    }, 4500);
  }, []);

  if (preLoading) return <Styles.PreLoaderGif></Styles.PreLoaderGif>;

  return (
    <>
      {currentTopic === "Mapa-desigualdade" ? (
        <DesigualMap />
      ) : (
        <Styles.MainContainer currentTopic={currentTopic}>
          <Styles.LogoPMF
            src="/images/logos/Logo_PMF_Ver_Mono_Branco.svg"
            alt="logo pmf"
          />
          <NavBar changeTopic={changeTopic} currentTopic={currentTopic} />
          <Styles.ContentContainer>
            <ContentTop currentTopic={currentTopic} />
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
      )}

      <Footer />
    </>
  );
}
