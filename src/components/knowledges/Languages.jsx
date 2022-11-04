import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1 },
      { id: 2, value: "CSS", xp: 1.5 },
      { id: 3, value: "HTML", xp: 1.5 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.9 },
      { id: 2, value: "Node", xp: 0.8 },
      { id: 3, value: "Express", xp: 0.6 },
      { id: 4, value: "Sass", xp: 0.6 },
      { id: 5, value: "Material UI", xp: 0.8},
      { id: 6, value: "Bootstrap", xp: 0.6 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;
