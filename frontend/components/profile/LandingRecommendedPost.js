
import { Tooltip } from "antd";
import React from "react";
import "./LandingRecommendedPost.css";
// import moment from "moment";
// import { truncate } from "../../helpers/truncate";
import { Editor, EditorState, convertFromRaw  } from 'draft-js';
import parse from "html-react-parser";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useSavePostHook from '../hooks/savePostHook'
import moment from 'moment'
// import useDeleteSavePost from '../hooks/deleteSavePost'
var  editorState = null
var contentState = null
var text = ''
var text2 = ''
var arr = []
const LandingRecommendedPost = ({ dataItem }) => {
  const { executeSavePost } = useSavePostHook()
  const [stateSave , setStateSave] = React.useState(false)
  // const { executeDeleteSavePost } = useDeleteSavePost()
  
  
  //   const navigate = useNavigate()
  const addToList = async (id) => {
   
    var  user_id = await window.sessionStorage.getItem("id");
    
    executeSavePost({
      data: { post_id: id, user_id: parseInt(user_id) },
    });
    setStateSave(true)
   
    // const body = {
    //   userid: userDetails?._id
    // }
    // console.log(body)
    // await axios.post(`/api/user/list/${id}`,
    //                   body,
    //                   ).then((res) => {
    //                     console.log('list added successfully')
    //                     navigate('/me/lists')
    //                 }).catch((err) => {
    //                   console.log(err.response.data.message)
    //                 })
  };
  const deleteToList = async (id) => {
    
    var  user_id = await window.sessionStorage.getItem("id");
    
    await axios.delete(`https://grande-means-medium.herokuapp.com/api/bookmarks/${id}`)
    setStateSave(false)
    // executeDeleteSavePost({
    //   data: { id: id},
    // });
    // const body = {
    //   userid: userDetails?._id
    // }
    // console.log(body)
    // await axios.post(`/api/user/list/${id}`,
    //                   body,
    //                   ).then((res) => {
    //                     console.log('list added successfully')
    //                     navigate('/me/lists')
    //                 }).catch((err) => {
    //                   console.log(err.response.data.message)
    //                 })
  };
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
   
   
 
  return (
    
      <div className="landing-recommended-post">
      <div className="landing-recommended-post-container">
        <div className="landing-recommended-left">
          <div className="landing-top">
          <img
            style={{width:35,height:35}}
              src={
                dataItem?.photoUrl ? dataItem?.photoUrl : 'https://img.freepik.com/premium-vector/hand-drawn-monkey-ape-vr-box-virtual-nft-style_361671-246.jpg'
              }
              alt="logo"
            />
           {dataItem?.username ? 
            <span>{dataItem.username}</span>
            :
            <span>{"No Name"}</span>
           }  
          </div>
          <div className="landing-content">
            <Link to={`/story/${dataItem.id}`}>{text}</Link>
                {/* {isJSON(dataItem.body) ? (
                  <div>
                  text
                  </div>
                ) : ( */}
                  <div>
                  {dataItem.title.replace(/(\([\w\d ]*\))+/g, '')}
                  </div>
                {/* )} */}
                
          
          </div>
          <div className="landing-footer">
          <span>{moment(dataItem.created_at).format('MMMM DD, YYYY')}</span>
            <div className="icons">
           
             

              <span>
                <svg class="eh el py" width="25" height="25">
                  <path
                    d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
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










