import { styled } from "styled-components";

const Container = styled.div`
  width: 30.56vw;
  max-width: 30.56vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 8vw;
  padding-top: 3vw;
`;

const SelectBox = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1vw;

  select {
    width: 30.21vw;
    height: 2.36vw;
    border-radius: 0.3vw;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
`

const OdsIcon = styled.div`
    height: 6vw;
    img{
      width: 4.72vw;  
    }
`

const InfoBox = styled.div`
    font-size: 0.8vw;
    line-height: 1.6vw;
    span{
        color: green;
        font-weight: 700;
    }
`

export const Styles = {
  Container,
  SelectContainer,
  SelectBox,
  OdsIcon,
  InfoBox
};
