import React from "react";
import { PageContainer, Heading, SubHeading, CountdownWrapper, CountdownGrid, GlobalStyle, } from "./styles";
import { Countdown } from "./countdown";
const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyle, null),
        React.createElement(PageContainer, null,
            React.createElement(Heading, null, "Erlings nedtelling"),
            React.createElement(CountdownGrid, null,
                React.createElement(CountdownWrapper, null,
                    React.createElement(SubHeading, null, "100 dagersfesten"),
                    React.createElement(Countdown, { targetDate: "2024-11-22", accent: "#f3722c" })),
                React.createElement(CountdownWrapper, null,
                    React.createElement(SubHeading, null, "Bursdagen min"),
                    React.createElement(Countdown, { targetDate: "2024-10-29", accent: "#f9844a" })),
                React.createElement(CountdownWrapper, null,
                    React.createElement(SubHeading, null, "Julaften"),
                    React.createElement(Countdown, { targetDate: "2024-12-24", accent: "#f9c74f" })),
                React.createElement(CountdownWrapper, null,
                    React.createElement(SubHeading, null, "Mamma sin bursdag"),
                    React.createElement(Countdown, { targetDate: "2025-03-29", accent: "#f9c74f" }))))));
};
export default App;
