import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {
  const marginTop = { marginTop: 20 };

  if (!messages) {
    return <div className="lead" style={marginTop}>Loading Messages...</div>;
  }

  // let lead;

  // if (messages.length > 0) {
  //   lead = <div className="lead">You have {messages.length} messages.</div>;
  // } else {
  //   lead = <div className="lead">You do not have any messages.</div>;
  // }

  const nonZero = <div className="lead" style={marginTop}>You have {messages.length} messages.</div>;
  const zero = <div className="lead" style={marginTop}>You do not have any messages.</div>;

  return (
    <div>
      {messages.length > 0 ? nonZero : zero}
      <div className="list-group">
        {messages.map((message) => <Message key={message.id} message={message} />)}
      </div>
    </div>
  );
};

export default MessageList;
