import React from "react";
import PostBox from './post'
 import usePostHooks from "../hooks/postHook";
 import { useHistory } from "react-router";
 import { useStateValue } from "../../context/StateContextProvider";
const Post = React.memo(() => {
       const { executePost } = usePostHooks();
       const history = useHistory()
       const [{ user }] = useStateValue();
      
    const generatePost = async (body,title,subtitle,e) => {
        
        var  user_id = await window.sessionStorage.getItem("id");
        let stringData = '(' + title + ')' + subtitle
        let photo = ''
       if (user?.photoUrl)
       {
        photo = user?.photoUrl
       }
       else {
        photo = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
       }
       await executePost({
                  data: {photoUrl:photo ,username:user.username,user_id :parseInt(user_id), author_id: parseInt(user_id), title: stringData , body: body },
                }).then(async res=>{
                 
                
                 await  history.push(`/story/${res.data.id}`);
                 
                }).catch(err=>{
                  alert("Post can not be found. Please try again.")
                });
              
    }
  return (
    <div>
    <PostBox generatePost={(body,title,subtitle)=>generatePost(body,title,subtitle)} />
    </div>
  );
});

export default Post