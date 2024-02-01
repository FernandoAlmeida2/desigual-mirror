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
              <Styles.NavItem>Quem somos</Styles.NavItem>
              <Styles.NavItem>O que fazemos</Styles.NavItem>
              <Styles.NavTitle>Como fazemos</Styles.NavTitle>
              <Styles.NavItem>O que alcançamos</Styles.NavItem>
              <Styles.NavItem>Nossas parcerias</Styles.NavItem>
              <Styles.NavItem>Resultados</Styles.NavItem>
              <Styles.NavItem>Projeções</Styles.NavItem>
              <Styles.NavItem onClick={() => changeTopic("Contato")}>Contato</Styles.NavItem>
              <Styles.NavItem onClick={() => changeTopic("none")}>Início</Styles.NavItem>
            </Styles.Navbar>
          )}
        </Styles.Container>
      }
    </>
  );
}
