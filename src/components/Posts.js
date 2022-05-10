import {React, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation
} from "react-router-dom";
import { getSlugged } from '../API/testingAPI';
import ReactMarkdown from 'react-markdown';
import "./Posts.css";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import EditorJSParser from './EditorJSParser';
import clockIcon from '../assets/icons8-clock.svg';
import NotFound from './NotFound';

//no more imports
var dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);


function Post (props)  {
  const [val, setVal] = useState([]);
    const location = useLocation();
    const postDate = dayjs(val.createdAt);

    const getAnswer = async () => {
      try {
        const response = await getSlugged('posts', location.pathname.substring(7)+"&populate=*");
        console.log(response.data.data);
        setVal(response.data.data[0].attributes);
      } catch (error) {
        this.setState({ error });
      }
    };

    useEffect(() => {
    getAnswer();
  }, []);

  function checkIfEmpty() {
    if (val.images != undefined) {
      if (val.images.data != null) {
        return true;
      } else { return false; }
    }
  }
    if(val.length != 0){
    return (
      <div id="Post">
        <h1>{val.title}</h1>
        <span id="postDate"><img src={clockIcon} alt="" id="clockIcon"/>{postDate.format("MM / DD / YYYY")}</span>
        <EditorJSParser data={val.postText}/>
        <div id="imgContainer">

        {checkIfEmpty() ? (val.images.data.map(content=>(
          <div key={content.id} className="postImagePreview"><Zoom><img className="zoom medium-zoom-image" src={"http://localhost:1337"+content.attributes.url}/></Zoom></div>
          ))) : ""}
        </div>
      </div>
    );}
    else { return <NotFound/>;}
  }

export default Post;