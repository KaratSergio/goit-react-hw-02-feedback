import React, { Component } from 'react';
import { AppContainer } from './App.styled';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { good: 0, neutral: 0, bad: 0 };
  }

  handleFeedback = type => {
    this.setState(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedbackPercentage = () => {
    const totalFeedback = this.totalFeedback();
    return totalFeedback === 0
      ? 0
      : Math.round((this.state.good / totalFeedback) * 100);
  };

  render() {
    const feedbackOptions = ['good', 'neutral', 'bad'];

    return (
      <AppContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.totalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              positivePercentage={this.positiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </AppContainer>
    );
  }
}

export default App;
