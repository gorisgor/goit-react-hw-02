import css from "./Feedback.module.css";

export default function Feedback({ state }) {
  const totalFeedbacks = state.good + state.neutral + state.bad;
  const positivePercentage =
    totalFeedbacks > 0 ? (state.good / totalFeedbacks) * 100 : 0;

  return (
    <div className={css.container}>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {totalFeedbacks}</p>
      <p>Positive feedback: {positivePercentage.toFixed(2)}%</p>
    </div>
  );
}
