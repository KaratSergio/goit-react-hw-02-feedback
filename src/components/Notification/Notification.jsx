import React from 'react';
import { Message } from './Notification.styled';

class Notification extends React.Component {
  render() {
    const { message } = this.props;
    return <Message>{message}</Message>;
  }
}

export default Notification;
