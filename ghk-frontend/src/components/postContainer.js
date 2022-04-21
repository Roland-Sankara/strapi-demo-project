import React from 'react';
import PostList from './postList';
import Pagination from './pagination';
import './postContainer.css';
import { getAll } from '../API/testingAPI';

class PostContainer extends React.Component {
    state = {
        content: [],
        error: null,
      };

      
    // Fetch your restaurants immediately after the component is mounted
    componentDidMount = async () => {
      try {
        const response = await getAll('posts');
        this.setState({ content: response.data.data });
      } catch (error) {
        this.setState({ error });
      }
    };


  render() {
    const { error, content } = this.state;
    
    return (
      <div id="postContainer">
      {console.log(this.state.content)}
      <h1>Aktuelt: </h1>
      <PostList info = {this.state.content}/>
        <Pagination/>
      </div>
    );
  }
}

export default PostContainer;