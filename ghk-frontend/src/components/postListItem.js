import React from 'react';
import './postListItem.css';
import clockIcon from '../assets/icons8-clock.svg';
import PostPreview from './postPreview';

class PostListItem extends React.Component {
  render() {
    const savedProps = this.props.data;
    console.log(savedProps);
    return (
      <div id="aktueltPost">
      <div id="postText">
       <h3>{savedProps.attributes.Title}</h3>
        <span id="postDate"><img src={clockIcon} alt="" id="clockIcon"/>{savedProps.attributes.Date}</span>
        <PostPreview data = {savedProps.attributes.PostText}/>
        <a href="./">les mer</a>
      </div>
      <div id="postImage" style={{ backgroundImage: `url(https://aitor.online/media/images/gherkin_build/gherkin_build_finished3.jpg.png)` }}></div>
      </div>
    );
  }
}

export default PostListItem;

