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
            <SubHeading>Påske</SubHeading>
            <Countdown targetDate="2025-04-12" accent="#f1ed02" />
          </CountdownWrapper>

          <CountdownWrapper>
            <SubHeading>1Mai/Geddon</SubHeading>
            <Countdown targetDate="2025-05-01" accent="#1e7416" />
          </CountdownWrapper>

          <CountdownWrapper>
            <SubHeading>Kristihimmelfartsdag</SubHeading>
            <Countdown targetDate="2025-05-29" accent="#f1ed02" />
          </CountdownWrapper>

          <CountdownWrapper>
            <SubHeading>Bursdagen min</SubHeading>
            <Countdown targetDate="2024-10-29" accent="#f9844a" />
          </CountdownWrapper>

          <CountdownWrapper>
            <SubHeading>Julaften</SubHeading>
            <Countdown targetDate="2024-12-24" accent="#f9c74f" />
          </CountdownWrapper>

          <CountdownWrapper>
            <SubHeading>Mamma sin bursdag</SubHeading>
            <Countdown targetDate="2025-03-29" accent="#f9c74f" />
          </CountdownWrapper>
        </CountdownGrid>
      </PageContainer>
    </>
  );
};

export default App;
