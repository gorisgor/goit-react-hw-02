import { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";
import Notification from "../Notification/Notification";
import css from "./App.module.css";

const getInitialData = () => {
  const savedData = localStorage.getItem("savedState");
  if (savedData !== null) {
    return JSON.parse(savedData);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export default function App() {
  const [state, setState] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("savedState", JSON.stringify(state));
  }, [state]);

  const totalFeedbacks = state.good + state.neutral + state.bad;
  const positiveFeedbacks =
    totalFeedbacks > 0 ? Math.round((state.good / totalFeedbacks) * 100) : 0;

  function updateFeedback(feedbackType) {
    setState((zeroState) => ({
      ...zeroState,
      [feedbackType]: zeroState[feedbackType] + 1,
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
        handleGoodClick={() => updateFeedback("good")}
        handleNeutralClick={() => updateFeedback("neutral")}
        handleBadClick={() => updateFeedback("bad")}
        handleReset={handleReset}
        totalFeedbacks={totalFeedbacks}
      />
      {totalFeedbacks === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={{
            good: state.good,
            neutral: state.neutral,
            bad: state.bad,
            totalFeedbacks: totalFeedbacks,
            positiveFeedbacks: positiveFeedbacks,
          }}
        />
      )}
    </div>
  );
}
