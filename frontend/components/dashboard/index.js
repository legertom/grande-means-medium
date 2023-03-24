import React, { useEffect, useState } from "react";
import LandingRecommendedPost from "./LandingRecommendedPost";
import "./LandingMainPage.css";
import WhoToFollow from "./WhoToFollow";
import { Link } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "antd";
import useGetPostHooks from "../hooks/getPost.js";
import useGetFollowPostHooks from "../hooks/getFollowPosts";
import useGetUserHooks from "../hooks/getUsers";
import { TextField } from "@mui/material";
import useSavePostHook from '../hooks/savePostHook'
import useFollowUserHook from '../hooks/followUserHook'
import useGetFollowHooks from '../hooks/useGetFollowings'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { endpoint } from "../config/config";

var ManualTrue = false;
const LandingMainPage = ({ userDetails }) => {
  const [tab, setTab] = useState(1);

  const [stories, setStories] = useState([
    { id: 1, title: "fakename" },
    { id: 2, title: "fakename" },
    { id: 3, title: "fakename" },
  ]);
  const [users, setUsers] = useState([
    {
      id: 1,
      displayName: "Hanna",
      photoURL: "",
      email: "test@fakeemail.com",
    },
    {
      id: 1,
      displayName: "Hanna",
      photoURL: "",
      email: "test@fakeemail.com",
    },
    {
      id: 1,
      displayName: "Hanna",
      photoURL: "",
      email: "test@fakeemail.com",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [userLoading, setUserLoading] = useState(true);
  const [dataRender, setDataRender] = useState(true);
  const [userManual, setUserManual] = useState(false);
  const [deleteUser, setDeleteUser] = useState(null);
  const [addUser, setAddUser] = useState(null);
  const [addPost, setAddPost] = useState(null);
  const { usersData, LoadingUser ,executeGetUser } = useGetUserHooks({manual:userManual});
  const { getFollow, executeGetFollow } = useGetFollowHooks({manual:userManual});
  const { titleData, LoadinPost ,executeGetPost } = useGetPostHooks({manual:userManual});
  const { followPost ,LoadinFollowPost,executeGetFollowPost } = useGetFollowPostHooks({manual:userManual});

  const [userPosts, setUserPosts] = useState(null);
  const [saveLoader, setSaveLoader] = useState(false);
  const [userFetch, setUserFetch] = useState(null);
  const [copyUserPosts, setCopyUserPosts] = useState(null);
  const [copyFollowPosts, setCopyFollowPosts] = useState(null);
  const [userDataId, setUserDataId] = useState(null);
  const [listLoading, setListLoading] = useState(false);
  const [followPostsFilter, setFollowPostsFilter] = useState(null);
  const { executeSavePost } = useSavePostHook()
  const { executeFollowUser } = useFollowUserHook()
  
  
  // useEffect(() => {
  //   async function getStories() {
  //     await axios
  //       .get("/api/stories")
  //       .then((res) => {
  //         // console.log(res.data.data);
  //         setLoading(false);
  //         setStories(res.data.data?.slice(0, 10));
  //       })
  //       .catch((err) => {
  //         console.log(err.response.data.message);
  //         setLoading(false);
  //       });
  //   }
  //   getStories();
  // }, []);

  // useEffect(() => {
  //   async function getUsers() {
  //     await axios
  //       .get("/api/user")
  //       .then((res) => {
  //         if (res.data.status) {
  //           let _users = res.data?.data?.filter((data) => data?._id !== userDetails?._id)
  //           setUsers(_users);
  //           setUserLoading(false);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err.response.data.message);
  //         setUserLoading(false);
  //       });
  //   }
  //   getUsers();
  // }, []);
  useEffect(() => {
    if (search != "") {
      let userPostsFilter = userPosts;
      let userPost = userPostsFilter.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      let userFollowFilter = followPostsFilter;
      let userFollow = userFollowFilter.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setCopyFollowPosts(userFollow );
      setCopyUserPosts(userPost);
    }
   
  }, [search]);
  useEffect(() => {
    const fetchData = async() => {
      var  user_id = await window.sessionStorage.getItem("id");
      
    setUserPosts(titleData);
   

    setUserFetch(usersData)
    setCopyUserPosts(titleData);
   
      setUserDataId(user_id)
      setListLoading(false)
    }
    fetchData()
  }, [LoadinPost,LoadingUser]);
  
  useEffect(()=>{
const fetchData = async () => {
  let ArrayPosts = []
  var  user_id = await window.sessionStorage.getItem("id");
  await followPost.map((item)=>{
    item.followed_id == user_id  && item.posts?.map((items)=>{
      ArrayPosts.push(items)
   })
   })
   let arrFilter = await ArrayPosts?.filter((value, index, self) =>
   index === self.findIndex((t) => (
     t.title === value.title
   ))
 )
//  if(arrFilter.length == 0){
//   setTab(1)
//  }
 setFollowPostsFilter(arrFilter)
}
fetchData()
  },[LoadinFollowPost])
  const deleteToList = async (id,post_id) => {
    if(listLoading == false){
      setListLoading(true)
      var  user_id = await window.sessionStorage.getItem("id");
      await axios.delete(`${endpoint}bookmarks/${post_id}`).then(async res => {
        setUserManual(true)
        setAddPost(res)
        toast.success("Post is successfully unsaved")
      }).catch(async err=>{
       alert("There is some error")
       setListLoading(false)
      })
    }
    else {
      alert("Please wait...")
    }
   
    
   
  
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
  const deleteFollowUser = async (id,post_id) => {
    
    var  user_id = await window.sessionStorage.getItem("id");
  console.log("Dsadsadsadasdasdasd====?",id)
    await axios.delete(`${endpoint}followings/${post_id}`).then(async res=> {
      setUserManual(true)
      setAddUser(res)
    }).catch(async err=>{
    alert("There is some error")
    })
    
    // console.log("Posts==========>",id)
    // let objIndex = posts.findIndex((obj => obj.id == parseInt(id)));
    // posts[objIndex].post_id = null
    // posts[objIndex].user_id = null
    // console.log("Posts==========>",posts)
    // setUserPosts(posts)
   
  
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
  useEffect(()=>{
    if(addUser != null){
      executeGetUser()
      executeGetFollowPost()
      executeGetFollow()
    }
  
  },[addUser])
  useEffect(()=>{
    if(addPost !=null){
      executeGetPost()
      
     
      
    }
    
   },[addPost])
  const addToList = async (id,userid) => {
    if(listLoading == false){
    setListLoading(true)
    var  user_id = await window.sessionStorage.getItem("id");
    const isSelected = userPosts.some((post) => post.id == id && post.user_id == parseInt(user_id));
    if(isSelected){
      toast.error("Post is already saved")
      return
    }
    await executeSavePost({
      data: { post_id: id, user_id: parseInt(user_id) },
    }).then(res=>{
      setUserManual(true)
      setAddPost(res)
      toast.success("Post is successfully saved")
    }).catch(err=>{
alert("There is some error")
setListLoading(false)
    })
  }
  else {
    alert("Please wait...")
  }
    
      // let objIndex = userPosts.findIndex((obj => obj.id == parseInt(id)))
      // userPosts[objIndex].user_id = parseInt(user_id)
      // setUserPosts(userPosts)
  

   
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
  const addFollowToList = async (id) => {

    var  user_id = await window.sessionStorage.getItem("id");
     console.log("Id-------------->",id)
     await executeFollowUser({
      data: { follower_id : parseInt(id) , followed_id:parseInt(user_id)  , user_id: parseInt(id) },
    }).then(async res=>{
      setUserManual(true)
      setAddUser(res)
    }).catch(async err=>{
      alert("There is some error")
    })
   
    // let posts = [...userPosts]
    // let objIndex = posts.findIndex((obj => obj.id == parseInt(id)));
    // // posts[objIndex].post_id = id
    // posts[objIndex].user_id = parseInt(user_id)
    // console.log("Posts==========>",posts)
    // setUserPosts(posts)
      // let objIndex = userPosts.findIndex((obj => obj.id == parseInt(id)))
      // userPosts[objIndex].user_id = parseInt(user_id)
      // setUserPosts(userPosts)
  

   
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
  console.log("UserDataId=====>",userDataId)
  return (
    <div className="landing-main">
      <div className="landing-main-container">
        <div className="landing-main-left">
          <div className="landing-main-tabs">
            <div
              onClick={() => setTab(0)}
              className={`tab ${tab === 0 && "active"}`}
            >
              <span>FOLLOWING</span>
            </div>
            <div
              onClick={() => setTab(1)}
              className={`tab ${tab === 1 && "active"}`}
            >
              <span>FOR YOU</span>
            </div>
          </div>
          <div className="landing-write-story">
            <h6>Share your ideas with some readers.</h6>
            <Link to="/posts">
              <button>Write on Grande</button>
            </Link>
          </div>
          {tab === 0 && (
            <div className="landing-recommended-posts">
              {[...Array(10)].map((_, index) => {
                return (
                  <>
                    {loading && (
                      <Skeleton.Button
                        key={index}
                        style={{
                          margin: "10px 0",
                        }}
                        active={true}
                        size={"lage"}
                        shape={"default"}
                        block={true}
                      />
                    )}
                  </>
                );
              })}
            {(search == "" ? followPostsFilter : copyFollowPosts)?.map((items)=>(
                  <LandingRecommendedPost dataItem={items} userDataId={userDataId} deleteToList = {(id,post_id)=>deleteToList(id,post_id)} addToList={(id)=>addToList(id)} tab1={true} listLoading={listLoading} />
                
              
               
                
              ))}
              {/* <div className="follow"> */}
              {/* <h2>Who to follow</h2> */}
              {/* {userFetch?.map((data) => (
                <WhoToFollow key={data?.id} data={data} addFollowToList={(id)=>addFollowToList(id)} userDataId={userDataId}   deleteFollowUser = {(id,follow_id)=>deleteFollowUser(id,follow_id)} />
              ))} */}

              {/* <WhoToFollow />
              <WhoToFollow />
              <WhoToFollow />
              <WhoToFollow />
              <WhoToFollow /> */}
              {/* </div> */}
            </div>
          )}
          {tab === 1 && (
            <div className="landing-recommended-posts">
              {[...Array(10)].map((_, index) => {
                return (
                  <>
                    {loading && (
                      <Skeleton.Button
                        key={index}
                        style={{
                          margin: "10px 0",
                        }}
                        active={true}
                        size={"lage"}
                        shape={"default"}
                        block={true}
                      />
                    )}
                  </>
                );
              })}

              {(search == "" ? userPosts : copyUserPosts)?.map((item) => (
                <LandingRecommendedPost dataItem={item} userDataId={userDataId} deleteToList = {(id,post_id)=>deleteToList(id,post_id)} addToList={(id)=>addToList(id)}  tab1={false} listLoading={listLoading}/>
              ))}

              {/* <LandingRecommendedPost />
              <LandingRecommendedPost />
              <LandingRecommendedPost />
              <LandingRecommendedPost />
              <LandingRecommendedPost /> */}
            </div>
          )}
        </div>
        <div className="landing-main-right">
          <div className="recommended-topics">
            <h2>Recommended topics</h2>
            <div className="topic">
              <span>Technology</span>
              <span>Money</span>
              <span>Business</span>
              <span>Productiviy</span>
              <span>Psychology</span>
              <span>Mindfulness</span>
              <span>Art</span>
            </div>
          </div>
          <TextField
            className="SignUp_input"
            id="email"
            onChange={({ target }) => setSearch(target.value)}
            placeholder={"Search"}
            // value={values.email}
            InputProps={{
              classes: {
                input: "SignUp_inputStyle",
              },
              // startAdornment: (
              //   <InputAdornment position="start">
              //     {/* <img alt="user" src={emailIcon} /> */}
              //   </InputAdornment>
              // ),
            }}
            variant="outlined"
          />

          <div className="follow">
            <h2>Who to follow</h2>
            {userFetch?.map((data) => (
              <WhoToFollow key={data?.id} data={data} addFollowToList={(id)=>addFollowToList(id)}  userDataId={userDataId}  deleteFollowUser = {(id,follow_id)=>deleteFollowUser(id,follow_id)} getFollow={getFollow}  />
            ))}
            {[...Array(5)]?.map((_, idx) => {
              return (
                <>
                  {userLoading && (
                    <Skeleton key={idx} active avatar paragraph={{ rows: 1 }} />
                  )}
                </>
              );
            })}
<ToastContainer/>
            {/* <WhoToFollow />
            <WhoToFollow />
            <WhoToFollow />
            <WhoToFollow />
            <WhoToFollow />
            <WhoToFollow /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMainPage;
