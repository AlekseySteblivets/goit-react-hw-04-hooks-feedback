import { useState } from 'react';
import './App.css';
import CardInterface from './hooks/CardInterface/CardInterface';
import Section from './hooks/Section/Section';

import FeedbackOptions from './hooks/FeedbackOptions/FeedbackOptions';
import Statistics from './hooks/Statistics/Statistics';
import Notification from './hooks/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  let total = good + bad + neutral;

  function countPositiveFeedbackPercentage() {
    return Math.round((good / total) * 100);
  }

  return (
    <div className="layout">
      <h1>Please leave feedback</h1>
      <CardInterface>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onCLickBtnGoog={() => setGood(good + 1)}
            onClickBtnBad={() => setBad(bad + 1)}
            onClickBtnNeutral={() => setNeutral(neutral + 1)}
          />
        </Section>

        <Section title="Statistic">
          {!total ? (
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
        </Section>
      </CardInterface>
    </div>
  );
}
