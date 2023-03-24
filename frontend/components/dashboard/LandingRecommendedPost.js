
import { Tooltip } from "antd";
import React from "react";
import "./LandingRecommendedPost.css";
// import moment from "moment";
// import { truncate } from "../../helpers/truncate";
import { Editor, EditorState, convertFromRaw  } from 'draft-js';
import parse from "html-react-parser";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Skeleton } from "antd";
import moment from 'moment'
import { Avatar, Box } from "@mui/material";
// import useDeleteSavePost from '../hooks/deleteSavePost'
var  editorState = null
var contentState = null
var text = ''
var text2 = ''
var arr = []
const LandingRecommendedPost = ({ dataItem ,userDataId ,deleteToList ,addToList ,tab1=false,listLoading=false }) => {
  
  const [stateSave , setStateSave] = React.useState(null)
  const [stateSaveDelete , setStateSaveDelete] = React.useState(false)
  // const { executeDeleteSavePost } = useDeleteSavePost()
  
  
  //   const navigate = useNavigate()
 

  function isJSON(str) {
    try {
        return (JSON.parse(str) && !!str);
    } catch (e) {
        return false;
    }
}

  //  if(isJSON(dataItem.body)){
  //   contentState = convertFromRaw(JSON.parse(dataItem.body))
  //   editorState = EditorState.createWithContent(contentState)
  //   text = editorState.getCurrentContent().getPlainText('\u0001')
   
  //  }
   if(dataItem.title.match(/\(([^)]+)\)/)){
    text =dataItem.title.match(/\(([^)]+)\)/)[1]
    // text2 = dataItem.title.match(/\(([^)]+)\)/)[0]
   }
   else {
    text = ''
    // text2 =''
   }
   
  //  if(dataItem?.body != undefined){
    
  //  }
 
  return (
    
      <div className="landing-recommended-post">
      <div className="landing-recommended-post-container">
        <div className="landing-recommended-left">
          <div className="landing-top">
          <Avatar
              sx={{ width: 24, height: 24 }}
              src={dataItem?.photoUrl ? dataItem?.photoUrl : 'https://img.freepik.com/premium-vector/hand-drawn-monkey-ape-vr-box-virtual-nft-style_361671-246.jpg'}
              alt="logo"
            />
          {dataItem?.username ?
              <Box sx={{ ml: '0.5rem' ,mr:'0.5rem' }}> <Link className="m-1 landing-link" to={{ pathname: `/followProfile/${dataItem.author_id}`, state: { foo: dataItem } }}><span>{dataItem?.username}</span> </Link></Box>
              :
              <span>{"No Name"}</span>}
                <span  className="landing-date" >{moment(dataItem.created_at).format('MMMM DD, YYYY')}</span>
          </div>
          <div className="landing-content">
          <Link className="landing-heading" to={`/story/${dataItem.id}`}>{text}</Link>
            {/* <Link to={`/story/${dataItem.id}`}>{text}</Link> */}
                {/* {isJSON(dataItem.body) ? (
                  <div>
                  text
                  </div>
                ) : ( */}
                 <div>
              <p> {dataItem.title.replace(/(\([\w\d ]*\))+/g, '')}</p>
              {/* {dataItem.title.replace(/(\([\w\d ]*\))+/g, '')} */}
            </div>
                 
                {/* )} */}
                
          
          </div>
          <div className="landing-footer">
            {/* <span>{moment(dataItem.created_at).format('MMMM DD, YYYY')}</span> */}
            {!tab1 && (
              <div className="icons">
            {dataItem.user_id == parseInt(userDataId)  ? (
              // <Tooltip title="Save" >
                <span onClick={()=> { listLoading ? alert("Please wait...") : deleteToList(dataItem.id,dataItem.post_id)}}>
                
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    class="px"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </span>
              // </Tooltip>
            ) : (
              // <Tooltip title="Save" >
                <span onClick={()=> {  listLoading ? alert("Please wait...") :addToList(dataItem.id)}}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    class="px"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="red"
                    ></path>
                  </svg>
                </span>
              // </Tooltip>
            ) }
             

              <span>
                <svg class="eh el py" width="25" height="25">
                  <path
                    d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            )}
           
          </div>
        </div>
        <div className="landing-recommended-right">
          <img
            width={50}
            src="https://media-public.canva.com/FzeL8/MAEva8FzeL8/1/tl.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
    
  
  );
};

export default LandingRecommendedPost;










