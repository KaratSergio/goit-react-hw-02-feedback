import { StatisticsBox } from './Statistics.styled';
import { Text } from './Statistics.styled';
import { Number } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
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
};

export default Statistics;
