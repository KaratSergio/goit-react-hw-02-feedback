import { StatisticsTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <StatisticsTitle>{title}</StatisticsTitle>
      {children}
    </div>
  );
};

export default Section;
