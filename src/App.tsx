import React from "react";
import {
  PageContainer,
  Heading,
  SubHeading,
  CountdownWrapper,
  CountdownGrid,
  GlobalStyle,
} from "./styles";

import { Countdown } from "./countdown";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Heading>Erlings nedtelling</Heading>

        <CountdownGrid>
          <CountdownWrapper>
            <SubHeading>100 dagersfesten</SubHeading>
            <Countdown targetDate="2024-11-22" accent="#f3722c" />
          </CountdownWrapper>

          <CountdownWrapper>
            <SubHeading>Bursdagen min</SubHeading>
            <Countdown targetDate="2024-10-29" accent="#f9844a" />
          </CountdownWrapper>

          <CountdownWrapper>
            <SubHeading>Julaften</SubHeading>
            <Countdown targetDate="2024-12-24" accent="#f9c74f" />
          </CountdownWrapper>
        </CountdownGrid>
      </PageContainer>
    </>
  );
};

export default App;
