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
                Desigual Lab
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "Projetos"}>
                Projetos
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "Avaliacoes"}>
                Avaliações
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "Aceleracoes"}>
                Acelerações
              </Styles.NavItem>
              <Styles.NavTitle>Como fazemos</Styles.NavTitle>
              <Styles.NavItem isSelected={currentTopic === "Formacao"}>
                Formação
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "Publicacoes"}>
                Publicações
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "Parcerias"}>
                Nossas parcerias
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "Resultados"}>
                Dados
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "Projecoes"}>
                Local
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "Equipe"}>
                Equipe
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "Agenda"}>
                Agenda
              </Styles.NavItem>
              <Styles.NavItem isSelected={currentTopic === "Projecoes"}>
                Local
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
