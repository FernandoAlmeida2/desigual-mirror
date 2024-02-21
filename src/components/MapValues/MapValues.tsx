import { Styles } from "./mapValues.style";

type Props = {
  bestDistrict: string | number;
  bestValue: number;
  worseDistrict: string | number;
  worseValue: number;
  mean: number;
  asymmetry: number;
  histogramPath: string;
};

export default function MapValues({
  bestDistrict,
  bestValue,
  worseDistrict,
  worseValue,
  mean,
  asymmetry,
  histogramPath,
}: Props) {

  return (
    <Styles.Container>
      <Styles.HistogramBox>
        <iframe
          id="iframe-mapa"
          src={histogramPath}
          width="100%"
          height="100%"
          style={{
            background: "rgb(209, 209, 209, 0.3)",
            padding: "1vw",
            borderRadius: "1vw",
          }}
        ></iframe>
      </Styles.HistogramBox>

      <Styles.MinMaxBox>
        <div>MAIOR/MENOR VALOR</div>
        <Styles.MinMaxValue isBest={true}>
          {bestValue.toLocaleString("pt-BR")}
        </Styles.MinMaxValue>
        <div>
          {typeof bestDistrict === "number"
            ? `Vários (${bestDistrict})`
            : bestDistrict}
        </div>
        <Styles.MinMaxValue isBest={false}>
          {worseValue.toLocaleString("pt-BR")}
        </Styles.MinMaxValue>
        <div>
          {typeof worseDistrict === "number"
            ? `Vários (${worseDistrict})`
            : worseDistrict}
        </div>
      </Styles.MinMaxBox>
      <Styles.MeanBox>
        <span>Média de Fortaleza</span>
        <br />
        {mean.toLocaleString("pt-BR")}
      </Styles.MeanBox>
      <Styles.AsimmetryBox>
        <span>DESIGUALTÔMETRO</span>
        <br />
        {asymmetry.toLocaleString("pt-BR")}
      </Styles.AsimmetryBox>
    </Styles.Container>
  );
}
