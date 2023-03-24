import React from "react";
import PostBox from './editPost'
 import usePostHooks from "../hooks/postHook";
 import useEditPostHooks from "../hooks/editPost.js"
 import { useLocation } from "react-router-dom";
  import { useHistory } from "react-router";
  import { useStateValue } from "../../context/StateContextProvider";
  import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Post = () => {
    const location = useLocation();
   
    const [{ user }] = useStateValue();
    const { executePost } = useEditPostHooks({id:location?.state?.id});
       const history = useHistory()
    const generatePost = async (body,title,subtitle) => {
        // console.log("Bidsas======>",body,title)
        let stringData = '(' + title + ')' + subtitle
        var  user_id = await window.sessionStorage.getItem("id");
        let photo = ''
        if (user?.photoUrl)
        {
         photo = user?.photoUrl
        }
        else {
         photo = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        }
        var obj = {
          photoUrl:photo,username:user.username, user_id :parseInt(user_id),author_id: parseInt(user_id), title: stringData , body: body
        }

       await executePost({
                  data: {photoUrl:photo,username:user.username, user_id :parseInt(user_id),author_id: parseInt(user_id), title: stringData , body: body },
                }).then(res=>{
                  toast.success("Successfully Edited !", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  
                  history.push("/");
                  window.location.reload()
                }).catch(err=>{
                  alert("This is some error in generating post")
                });
               
                // window.location.reload()
              
               
    }
  return (
    <div>
    <PostBox  title={location.state.title} body={location.state.body} generatePost={(body,title,subtitle)=>generatePost(body,title,subtitle)} />
   <ToastContainer />
    </div>
  );
};

export default Post