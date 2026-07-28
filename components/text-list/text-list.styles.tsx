import styled from "styled-components";

export const Root = styled.ul`
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.525rem;
  font-size: 0.8rem;
  line-height: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.01rem;
`;

export const Item = styled.li`
  list-style: circle;

  &::marker {
    color: #000;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
