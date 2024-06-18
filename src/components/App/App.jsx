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

  function handleGoodClick() {
    setState((prevState) => ({
      ...prevState,
      good: prevState.good + 1,
    }));
  }

  function handleNeutralClick() {
    setState((prevState) => ({
      ...prevState,
      neutral: prevState.neutral + 1,
    }));
  }

  function handleBadClick() {
    setState((prevState) => ({
      ...prevState,
      bad: prevState.bad + 1,
    }));
  }

  function handleReset() {
    setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <div className={css.container}>
      <Description />
      <Options
        handleGoodClick={handleGoodClick}
        handleNeutralClick={handleNeutralClick}
        handleBadClick={handleBadClick}
        handleReset={handleReset}
      />
      <Feedback state={state} />
    </div>
  );
}
