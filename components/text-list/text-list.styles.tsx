import styled from "styled-components";

export const Root = styled.ul`
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.525rem;
  font-size: 0.8rem;
  line-height: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.01rem;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Icon = styled.span`
  margin-top: 0.2rem;
  color: #000;
  font-size: 0.7rem;
  flex-shrink: 0;
`;

export const Content = styled.span`
  flex: 1;

  code {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 0.92em;
    font-weight: 600;
    padding: 0 0.2rem;
  }
`;
