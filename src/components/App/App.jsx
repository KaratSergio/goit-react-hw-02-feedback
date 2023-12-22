import { useState } from 'react';
import { AppContainer } from './App.styled';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setState(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  const { good, neutral, bad } = state;
  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage =
    totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <AppContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </AppContainer>
  );
};

export default App;
