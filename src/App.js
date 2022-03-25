import { useState } from 'react';
import './App.css';
import Section from './hooks/Section';
import FeedbackOptions from './hooks/FeedbackOptions';
import Statistics from './hooks/Statistics';
import Notification from './hooks/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  let total = good + bad + neutral;

  function countPositiveFeedbackPercentage() {
    let positiveFeedBackPers = 0;
    if (good > 0 || neutral > 0 || bad > 0) {
      positiveFeedBackPers = Math.round((good / total) * 100);
    }

    return positiveFeedBackPers;
  }

  return (
    <div>
      <h1>Please leave feedback</h1>
      <Section />
      <FeedbackOptions
        onCLickBtnGoog={() => setGood(good + 1)}
        onClickBtnBad={() => setBad(bad + 1)}
        onClickBtnNeutral={() => setNeutral(neutral + 1)}
      />
      {!(good > 0 || neutral > 0 || bad > 0) ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </div>
  );
}
