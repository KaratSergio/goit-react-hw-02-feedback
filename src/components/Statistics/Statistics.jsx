import React from 'react';
import { StatisticsBox, Text, Number } from './Statistics.styled';

class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <StatisticsBox>
        <Text>
          Good: <Number>{good}</Number>
        </Text>
        <Text>
          Neutral: <Number>{neutral}</Number>
        </Text>
        <Text>
          Bad: <Number>{bad}</Number>
        </Text>
        <Text>
          Total: <Number>{total}</Number>
        </Text>
        <Text>
          Positive Feedback: <Number>{positivePercentage}%</Number>
        </Text>
      </StatisticsBox>
    );
  }
}

export default Statistics;
