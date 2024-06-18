import { useState } from "react";

import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";
import css from "./App.module.css";

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodClick = () => {
    setState((prevState) => ({
      ...prevState,
      good: prevState.good + 1,
    }));
  };

  const handleNeutralClick = () => {
    setState((prevState) => ({
      ...prevState,
      neutral: prevState.neutral + 1,
    }));
  };

  const handleBadClick = () => {
    setState((prevState) => ({
      ...prevState,
      bad: prevState.bad + 1,
    }));
  };
  const handleReset = () => {
    setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options {} />
      <Feedback />
    </div>
  );
}
