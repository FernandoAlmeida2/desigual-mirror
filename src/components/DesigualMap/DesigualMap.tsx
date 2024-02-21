"use client";

import MapContent from "./MapContent/MapContent";
import MapValues from "./MapValues/MapValues";
import TabPanel from "./TabPanel/TabPanel";
import { Styles } from "./DesigualMap.styles";
import { useState } from "react";
import indicatorsList from "@/app/lib/placeholder-data";

export default function DesigualMap() {
  const [selectedSubject, setSelectedSubject] = useState(
    indicatorsList[0].subject
  );
  const [selectedIndicator, setSelectedIndicator] = useState(
    indicatorsList[0].indicators[0].title
  );

  const currentIndicator = indicatorsList
    .filter((indicatorGroup) => indicatorGroup.subject === selectedSubject)[0]
    .indicators.filter((indicator) => indicator.title === selectedIndicator)[0];

  function changeSubject(newSubject: string) {
    setSelectedSubject(newSubject);
    setSelectedIndicator(
      indicatorsList.filter(
        (indicatorGroup) => indicatorGroup.subject === newSubject
      )[0].indicators[0].title
    );
  }

  function changeIndicator(newIndicator: string) {
    setSelectedIndicator(
      indicatorsList
        .filter(
          (indicatorGroup) => indicatorGroup.subject === selectedSubject
        )[0]
        .indicators.filter((indicator) => indicator.title === newIndicator)[0]
        .title
    );
  }

  return (
    <Styles.Container>
      <TabPanel
        currentIndicator={currentIndicator}
        selectedSubject={selectedSubject}
        changeIndicator={changeIndicator}
        changeSubject={changeSubject}
      />
      <MapContent
        mapPath={currentIndicator.mapPath}
        tablePath={currentIndicator.tablePath}
      />
      <MapValues
        bestDistrict={currentIndicator.bestDistrict}
        bestValue={currentIndicator.bestValue}
        worseDistrict={currentIndicator.worseDistrict}
        worseValue={currentIndicator.worseValue}
        mean={currentIndicator.mean}
        asymmetry={currentIndicator.asymmetry}
        histogramPath={currentIndicator.histogramPath}
      />
    </Styles.Container>
  );
}
