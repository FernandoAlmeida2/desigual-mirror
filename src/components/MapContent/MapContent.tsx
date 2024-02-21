"use client";

import { MouseEventHandler, useState } from "react";
import { Styles } from "./mapContent.style";

type Props = {
  mapPath: string;
  tablePath: string;
};

export default function MapContent({ mapPath, tablePath }: Props) {
  const [itemSelected, setItemSelected] = useState("map");

  return (
    <Styles.Container>
      <Styles.NavBar>
        <Styles.NavItem
          isSelected={itemSelected === "map"}
          onClick={() => itemSelected !== "map" && setItemSelected("map")}
        >
          Mapa
        </Styles.NavItem>
        <Styles.NavItem
          isSelected={itemSelected === "table"}
          onClick={() => itemSelected !== "table" && setItemSelected("table")}
        >
          Tabela
        </Styles.NavItem>
      </Styles.NavBar>
      {itemSelected === "map" ? (
        <iframe
          id="iframe-mapa"
          src={mapPath}
          width="100%"
          height="100%"
          style={{ background: "rgb(209, 209, 209, 0.3)", padding: "1vw" }}
        ></iframe>
      ) : (
        <iframe
          id="iframe-mapa"
          src={tablePath}
          width="100%"
          height="100%"
          style={{ background: "rgb(209, 209, 209, 0.3)", padding: "1vw" }}
        ></iframe>
      )}
    </Styles.Container>
  );
}
