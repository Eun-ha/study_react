import React from "react"
import {Link} from "react-router-dom"

const ImageView = (props) => {
  console.log(props.location.state.image)
  const { largeImageURL:image, tags, user: owner, pageURL} = props.location.state.image
  return(
    <div>
      <img src={image} alt={tags} />
      <p>&copy:pixabay</p>
      <h4>Credit: <span>{owner}</span></h4>
      <h4>Download: <span><a target="_blank" href={pageURL}>Go to download</a></span></h4>
      <button><Link to="/">Home</Link></button>
    </div>
  )
}

export default ImageView