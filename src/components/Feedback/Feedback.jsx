import css from "./Feedback.module.css";

export default function Feedback({ feedback }) {
  return (
    <div className={css.container}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {feedback.totalFeedbacks}</p>
      <p>Positive feedback: {feedback.positiveFeedbacks}%</p>
    </div>
  );
}
