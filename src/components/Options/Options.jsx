import css from "./Options.module.css";

export default function Options({
  handleGoodClick,
  handleNeutralClick,
  handleBadClick,
  handleReset,
  totalFeedbacks,
}) {
  return (
    <div className={css.container}>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      {totalFeedbacks > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}
