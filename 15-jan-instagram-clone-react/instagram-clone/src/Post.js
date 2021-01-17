import React, {useState} from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post({username, caption, imageUrl}) {
  const [input, setInput] = useState('');
  const [comments, setComments] = useState([
    //{username:'Me',comment:'Hello'}
  ]);

  const postComment = (event) => {
    event.preventDefault();
    setComments([...comments, {username:'Me',comment: input}]);
    setInput('');
    
    console.log(comments);
  }

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="RafehQazi"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      <img 
      className="post__image"
      src={imageUrl}/>

      <h4 className="post__text"><strong>{username}  </strong>{caption}</h4>

      {
        comments.map(comment => (
          <h4 className="post__text"><strong>{comment.username}  </strong>{comment.comment}</h4>
        ))
      }
      
      <form className="post__commentBox">
        <input 
          className="post__input"
          type="text"
          placeholder="Add a commnet..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="post__button"
          disabled={!input}
          type="submit"
          onClick={postComment}
        >Post</button>
      </form>
    </div>
  )
}

export default Post
