//import Link from "next/link";

import { Styles } from "./Navbar.styles";

type Props = {
  changeTopic: Function;
};

export default function NavBar({ changeTopic }: Props) {
  return (
    <Styles.Container>
      <Styles.Logo
        src="/images/desigualLab-vert-col-pos.svg"
        alt="logo desigual lab"
      />

      <Styles.Navbar>
        <Styles.NavItem onClick={() => changeTopic(1)}>
          Tópico 1
        </Styles.NavItem>
        <Styles.NavItem>Tópico 2</Styles.NavItem>
        <Styles.NavItem>Tópico 3</Styles.NavItem>
        <Styles.NavItem>Tópico 4</Styles.NavItem>
      </Styles.Navbar>
    </Styles.Container>
  );
}
