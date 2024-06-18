import { useState } from "react";
import css from "./Options.module.css";
export default function Options({}) {
  return (
    <div className={css.container}>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
