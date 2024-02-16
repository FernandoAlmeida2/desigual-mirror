"use client";

import { useState } from "react";
//import Link from "next/link";

import { Styles } from "./Navbar.styles";

type Props = {
  currentTopic: string;
  changeTopic: Function;
};

export default function NavBar({ currentTopic, changeTopic }: Props) {
  return (
    <>
      {
        <Styles.Container>
          <Styles.Logo
            src="/images/logos/desigualLab-vert-white.svg"
            alt="logo desigual lab"
          />
          {currentTopic === "none" ? (
            <Styles.MenuIcon onClick={() => changeTopic("Quem-somos")} />
          ) : (
            <Styles.Navbar>
              <Styles.NavItem
                isSelected={currentTopic === "Quem-somos"}
                onClick={() => changeTopic("Quem-somos")}
              >
                Quem somos
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "O-que-fazemos"}>
                O que fazemos
              </Styles.NavItem>
              <Styles.NavTitle>Como fazemos</Styles.NavTitle>
              <Styles.NavItem isSelected={currentTopic === "O-que-alcancamos"}>
                O que alcançamos
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "Parcerias"}>
                Nossas parcerias
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "Resultados"}>
                Resultados
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "Projecoes"}>
                Projeções
              </Styles.NavItem>
              <Styles.NavItem
                isSelected={currentTopic === "Contato"}
                onClick={() => changeTopic("Contato")}
              >
                Contato
              </Styles.NavItem>
              <Styles.NavItem
                isSelected={currentTopic === "none"}
                onClick={() => changeTopic("none")}
              >
                Início
              </Styles.NavItem>
            </Styles.Navbar>
          )}
        </Styles.Container>
      }
    </>
  );
}
