import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";
import css from "./App.module.css";

const zeroState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  return (
    <div className={css.container}>
      <Description />
      <Feedback />
      <Options />
    </div>
  );
}
