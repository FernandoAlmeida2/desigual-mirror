"use client";

import { useState } from "react";
//import Link from "next/link";

import { Styles } from "./Navbar.styles";

type Props = {
  currentTopic: number;
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
          {currentTopic === 0 ? (
            <Styles.MenuIcon onClick={() => changeTopic(1)} />
          ) : (
            <Styles.Navbar>
              <Styles.NavItem>Quem somos</Styles.NavItem>
              <Styles.NavItem>O que fazemos</Styles.NavItem>
              <Styles.NavTitle>Como fazemos</Styles.NavTitle>
              <Styles.NavItem>O que alcançamos</Styles.NavItem>
              <Styles.NavItem>Nossas parcerias</Styles.NavItem>
              <Styles.NavItem>Resultados</Styles.NavItem>
              <Styles.NavItem>Projeções</Styles.NavItem>
              <Styles.NavItem>Contato</Styles.NavItem>
              <Styles.NavItem onClick={() => changeTopic(0)}>Início</Styles.NavItem>
            </Styles.Navbar>
          )}
        </Styles.Container>
      }
    </>
  );
}
