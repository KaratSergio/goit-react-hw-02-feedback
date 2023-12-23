import React from 'react';
import { FeedbackButton } from './FeedbackOptions.styled';

class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map(option => (
          <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </FeedbackButton>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
