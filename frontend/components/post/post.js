// import React, { useState, useEffect } from "react";
// // import {useStateValue} from '../../contexts/StateContextProvider'
// // import db from '../../firebase'
// // import firebase from 'firebase'
// import "./Post.css";
// import { Popover, Avatar, Button } from "@mui/material";
// import usePostHooks from "../hooks/postHook";
// import { useHistory } from "react-router";
// // import Picker from 'emoji-picker-react'

// // import StatusInput from '../StatusInput/StatusInput'
// // import TabbarMenu from '../../elements/TabbarMenu/TabbarMenu'
// // import postToCloudinary from '../../helpers/postToCloudinary'
// // import {getInfo} from '../../helpers/getImageDimension'
// // import {generateAltText} from '../../helpers/generateAltText'

// // import Modal from '../../elements/Modal/Modal'
// // import Spinner from '../../elements/Spinner/Spinner'
// // import CropPhoto from '../EditPhoto/CropPhotoB'
// // import AddALT from '../EditPhoto/AddALT'

// // import CancelIcon from '@material-ui/icons/Cancel'
// // import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
// // import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
// // import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined'
// // import EventNoteSharpIcon from '@material-ui/icons/EventNoteSharp'
// // import GifOutlinedIcon from '@material-ui/icons/GifOutlined'
// // import CropIcon from '@material-ui/icons/Crop'
// // import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined'

// const TweetBox = () => {
//   // const [{user}] = useStateValue()
//   // const {firstName} = user
//   const [profile, setProfile] = useState(null);
//   const [tweetMessage, setTweetMessage] = useState("");
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [altText, setAltText] = useState("Demo");
//   const [src, setSrc] = useState(null);
//   const [imageToSend, setImageToSend] = useState(null);
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   const [initialImageSize, setinitialImageSize] = useState({
//     width: 0,
//     height: 0,
//   });
//   const [initialAspectRatio, setinitialAspectRatio] = useState(null);
//   const [croppedImageResult, setCroppedImageResult] = useState(null);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [isLoading, setIsloading] = useState(false);
//   const { executePost } = usePostHooks();
//   const history = useHistory();

//   const onSelectFile = (e) => {
//     const fileReader = new FileReader();
//     fileReader.onloadend = () => {
//       setSrc(fileReader.result);
//       setImageToSend(fileReader.result);
//     };
//     fileReader.readAsDataURL(e.target.files[0]);

//     getInfo(e).then((res) => {
//       setinitialImageSize({ width: res.width, height: res.height });
//     });
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "post-popover" : undefined;
//   // const onClickEmoticon = (event) => setAnchorEl(event.currentTarget)
//   const handleClose = () => setAnchorEl(null);

//   const onEmojiClick = (event, emojiObject) => {
//     let newMessage = tweetMessage + emojiObject.emoji;
//     setTweetMessage(newMessage);
//   };
//   const generatePost = () => {
//     executePost({
//       data: { author_id: 1, title: title, body: body },
//     });
//     history.push("/");
//   };

//   return (
//     <>

//     </>
//   );
// };

// export default TweetBox;

import React, { Component } from "react";
// import { render } from 'react-dom';
import { EditorState ,convertToRaw , } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Post.css";
import { Popover, Avatar, Button } from "@mui/material";
import usePostHooks from "../hooks/postHook";
import { useHistory } from "react-router";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import './App.css'
  

async function uploadImageCallBack(file) {
   return new Promise(async(resolve, reject) => {
 
    let cloud_name = 'doxpyn6x3';
    let upload_preset = 'blmy4zym';
    var imageData = new FormData();

    imageData.append('file', file);
    imageData.append('upload_preset', upload_preset);
    imageData.append('cloud_name', cloud_name);
   
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
          method: 'POST',
          body: imageData,
        },
      );
      const body = await res.json();

     
      resolve({ data: { link: body.url } });
     
      // setImage(body.url);
    } catch (error) {
      reject(error)
    }
     });
  // return new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open("POST", "https://api.imgur.com/3/image");
  //   // xhr.setRequestHeader("Authorization", "Client-ID 	f041ce3b725b659");
  //   const data = new FormData();
  //   data.append("image", file);
  //   xhr.send(data);
  //   xhr.addEventListener("load", () => {
  //     const response = JSON.parse(xhr.responseText);
  //     console.log(response);
  //     resolve(response);
  //   });
  //   xhr.addEventListener("error", () => {
  //     const error = JSON.parse(xhr.responseText);
  //     console.log(error);
  //     reject(error);
  //   });
  // });
}

export default class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      anchorEl:null,
      title:'',
      body:'',
      subtitle:''
    };
    var open = Boolean(this.state.anchorEl);
   var id = open ? "post-popover" : undefined;
  }
   
  // const onClickEmoticon = (event) => setAnchorEl(event.currentTarget)
    handleClose = () => this.setState({anchorEl:null});

   onEmojiClick = (event, emojiObject) => {
    let newMessage = tweetMessage + emojiObject.emoji;
    // setTweetMessage(newMessage);
  };
   generatePost = () => {
  
    if(this.state.title == ''){
      toast.error("Title is required !", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    else if (this.state.subtitle == ''){
      toast.error("SubTitle is required !", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    else {
      this.props.generatePost(this.state.body,this.state.title,this.state.subtitle)
    }
   
    // executePost({
    //   data: { author_id: 1, title: title, body: body },
    // });
    // history.push("/");
  };
  onEditorStateChange = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
    });
  };
  onEditorStateChange = (editorState) => {
   
    this.convertContentToHTML(editorState);
    this.setState({
      editorState,
    });
  }
  convertContentToHTML = (editorState) => {
    let currentContentAsHTML = convertToRaw(editorState.getCurrentContent());
    this.setState({body:JSON.stringify(currentContentAsHTML)})
  
}
  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
   
    this.setState({
      editorState,
    });
  }
  render() {
    const { editorState } = this.state;
    return (
      <div>
            <div className="post-box">
        <form>
          <div className="tweetBox__wrapperInput">
            <div className="tweetBox__ava"></div>
            <div className="tweetBox__input">
              <textarea
                rows="1"
                placeholder="Title"
                className="title-input"
                type="text"
                value={this.state.title}
                onChange={(e) => this.setState({title:e.target.value})}
              ></textarea>
              <textarea
                rows="1"
                placeholder="Sub Title"
                className="title-input"
                type="text"
                value={this.state.subtitle}
                onChange={(e) => this.setState({subtitle:e.target.value})}
              ></textarea>
              <div className="editor">
          <Editor
            editorState={editorState}
            placeholder={"Body"}
            onEditorStateChange={editorState => {
          this.onEditorStateChange(editorState);
        }}
            // onChange={this.onChange}
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: {
                uploadCallback: uploadImageCallBack,
                previewImage: true,
  alt: { present: true, mandatory: false },
  inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                // alt: { present: true, mandatory: true },
              },
            }}
          />
        </div>
              {/* <textarea
                rows="5"
                className="body-input"
                placeholder="Body"
                type="text"
                value={this.state.body}
                onChange={(e) => this.setState({body:e.target.value})}
              ></textarea> */}

             
              <div className="tweetBox__input-actions">
               
                <Button  type="button"
                className="tweetBox__tweetButton" 
               onClick={() => this.generatePost() }
               >
               
                
                  Publish
                </Button>
                <ToastContainer />
                {/* {
                                    isLoading ?
                                    <Button className='tweetBox__tweetButton'><Spinner /></Button>
                                    :
                                    <Button type='submit'className='tweetBox__tweetButton'>Post</Button>
                                } */}
              </div>
            </div>
          </div>
        </form>
      </div>
        
      </div>
    );
  }
}
