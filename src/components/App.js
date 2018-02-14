import React from 'react';
import MessageList from './MessageList';
import AddMessageForm from './AddMessageForm';
import data from '../messages.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null
    };
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ messages: data });
    }, 1000);
  }

  addMessage(message) {
    message.id = this.state.messages.length;
    let messages = this.state.messages;
    messages = [...messages, message];
    this.setState({ messages });
  }

  render() {
    return (
      <div>
        <h4 className="display-4">Messages</h4>
        <AddMessageForm addMessage={this.addMessage} />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
