import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #18191b;
  margin: 0 auto;
`;

const Title = styled.h1`
  position: absolute;
  left: 33%;
  top: 50%;
  font-weight: 400;
  font-size: 50px;
  line-height: 34px;
`;

export const Error: FunctionComponent = () => {
  return (
    <Wrapper>
      <Title>страница не найдена</Title>
    </Wrapper>
  );
};
