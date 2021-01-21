import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import {Link, useHistory} from "react-router-dom";


function Header({backButton}) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ):(
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <img 
      className="header__logo"
      src="http://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo" />
      <Link to="/chats">
        <IconButton>
          <QuestionAnswerIcon className="header__icon" fontSize="large"/>
        </IconButton>
      </Link>
    </div>
  )
}

export default Header
