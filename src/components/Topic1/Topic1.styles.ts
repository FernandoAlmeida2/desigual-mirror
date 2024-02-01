import { styled } from "styled-components";

const Container = styled.div`
  width: 34.8vw;
  height: 52.34vw;
  padding: 8.17vw 1vw 4vw 8.76vw;
  text-align: justify;
  color: #261B0B;
  overflow-y: auto;

  /* width */
  &::-webkit-scrollbar {
    width: 0.5vw;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgb(229, 196, 0, 0.7);
    border-radius: 1vw;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgb(229, 196, 0, 0.7);
    width: 2vw;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }

  &::-webkit-scrollbar-track-piece {
    margin: 12vw 0 4vw 0;
  }

  h1 {
    font-size: 1.5vw;
    margin-bottom: 1vw;
    font-weight: 700;
  }

  p {
      font-size: 1vw;
      line-height: 1.3vw;
    }
`;

export const Styles = {
  Container,
};
