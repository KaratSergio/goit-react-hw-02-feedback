import styled from 'styled-components';

export const FeedbackButton = styled.button`
  width: 60px;
  margin-top: 15px;
  margin-right: 10px;
  border-radius: 8px;
  box-shadow: 1px 1px 1px black;

  &:hover {
    background-color: #cceeff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #99c2ff;
  }
`;
