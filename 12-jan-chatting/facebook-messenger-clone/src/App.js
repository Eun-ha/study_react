import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'Minsu', text: 'hey guys'},
    {username: 'Eunha', text: 'whats up'}
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    //const username = prompt('Please enter your name');
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Let's chit chatting!</h1>
      <h2>welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a message....</InputLabel>
          <Input className="app__input" value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}><SendIcon></SendIcon></IconButton>
        </FormControl>
      </form>
      
      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }
    </div>
  );
}

export default App;
