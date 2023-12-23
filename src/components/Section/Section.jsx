import React from 'react';
import { StatisticsTitle } from './Section.styled';

class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <StatisticsTitle>{title}</StatisticsTitle>
        {children}
      </div>
    );
  }
}

export default Section;
