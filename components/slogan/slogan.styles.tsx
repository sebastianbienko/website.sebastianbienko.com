import styled from "styled-components";

export const Root = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  height: 2rem;
  background-color: white;

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Line = styled.div`
  flex-grow: 1;

  > div {
    width: 100%;
    height: 1px;
    background: black;
  }
`;

export const Text = styled.div`
  flex-shrink: 1;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 0.5rem;

    > span {
      font-size: 0.8rem;
      font-family: "Wire One";
      text-transform: uppercase;
      letter-spacing: 0.15rem;
      padding: 0 0.5rem;

      @media screen and (min-width: 360px) {
        font-size: 1;
      }

      @media screen and (min-width: 400px) {
        font-size: 1.2rem;
      }
    }
  }
`;
