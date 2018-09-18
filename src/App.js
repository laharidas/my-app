import React from "react";
import "./index.css";

// Import module and default styles
import CircularProgressbar from "react-circular-progressbar";
import "./progress-bar.css";

const percentage = 100;
const animation = true;
const counterClockwise = true;

const App = () =>
  <div>
    <div style={{ width: "200px" }}>
      <CircularProgressbar
        percentage={percentage}
        text={`Schedule: ${percentage}`}
        initialAnimation={animation}
        counterClockwise={counterClockwise}
        background={"red"}
        backgroundPadding={1}
        styles={{
          background: {
            fill: "#3e98c7"
          },
          text: {
            fill: "white",
            fontSize: 10,
            dominantBaseline: "middle",
            textAnchor: "middle"
          },
          path: {
            stroke: "#fff",
            strokeWidth: 2,
            transition: "1.5s ease 0s"
          },
          trail: {
            stroke: "#87b9d4"
          }
        }}
      />
    </div>
  </div>;

export default App;
