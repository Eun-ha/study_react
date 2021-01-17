import React, {useState} from 'react';
import './App.css';
import Post from './Post';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button, Input} from '@material-ui/core';

function getModalStyle(){
  const top = 50;
  const left = 50;

  return{
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position:'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadow=5,
    padding: theme.spacing(2,4,3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [posts, setPosts] = useState([
    {
      username:"programmer",
      caption:"Wow it works!", 
      imageUrl:"https://cdn-media-1.freecodecamp.org/images/1*uwijKPq06BeRriP7Xf1faA.jpeg"
    },
    {
      username:"clever",
      caption:"That's amazing!",
      imageUrl:"https://cdn-media-1.freecodecamp.org/images/1*6Eq6hZnRmWfUZNulwtZvoA.png"
    }
  ]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const signUp = (event) => {
    event.preventDefault();
  }

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__singup">
            <Input 
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input 
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input 
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" onclick={signUp}>Sign up</Button>
          </form>
        </div>
      </Modal>
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <Button onClick={() => setOpen(true)}>Sign up</Button>
      </div>

      
      <div className="app__posts">
        {
          posts.map(post => (
            <Post
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
            />
          ))
        }
      </div>
      


      

      

    </div>
  );
}

export default App;
