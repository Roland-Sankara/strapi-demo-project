import React from 'react';
import markdownToTxt from 'markdown-to-txt';

class PostPreview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            default: "test"
        }
    }

      
      // Fetch your restaurants immediately after the component is mounted
      componentDidMount = async () => {
      };
    
      render() {
      const {data} = this.state;
      let redata = "";
      if(data == null){ redata = "missing text" }
      else {redata = data}
       //const redata = markdownToTxt(data);
        return (
          <div className="postPreview">
           {redata.substr(0, 80)+'...' }
          </div>
        );
      }
    }
    



export default PostPreview;