import { styled } from "styled-components";

const Container = styled.div`
  width: 19.65vw;
  max-width: 19.65vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  padding-top: 3vw;
`;

const HistogramBox = styled.div`
  height: 25.7vw;
  width: 19.44vw;
`

const MinMaxBox = styled.div`
  background-color: #f0f0f0;
  width: 19.44vw;
  height: 15.97vw;
  border-radius: 1vw;
  display: flex;
  font-weight: 700;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vw;
`;
const MinMaxValue = styled.div<{
  isBest: boolean;
}>`
  font-size: 2vw;
  color: ${(props) => (props.isBest ? "green" : "red")};
`;

const MeanBox = styled.div`
  text-align: center;
  width: 19.583vw;
  height: 5.972vw;
  border-radius: 1vw;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 700;
  }
`;

const AsimmetryBox = styled.div`
  text-align: center;
  width: 19.583vw;
  height: 5.972vw;
  border-radius: 1vw;
  background-color: #FF5722;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 700;
  }
`;

export const Styles = {
  Container,
  HistogramBox,
  MinMaxBox,
  MinMaxValue,
  MeanBox,
  AsimmetryBox
};
