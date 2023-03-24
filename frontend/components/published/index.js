import React, { useEffect, useState } from "react";
import LandingRecommendedPost from "./LandingRecommendedPost";
import "./LandingMainPage.css";
import WhoToFollow from "./WhoToFollow";
import { Link } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "antd";
import useGetPostHooks from "../hooks/getPost.js";
import useGetUserHooks from "../hooks/getUsers";
import { TextField } from "@mui/material";
import useSavePostHook from '../hooks/savePostHook'
import useFollowUserHook from '../hooks/followUserHook'
import { endpoint } from "../config/config";
import useGetFollowHooks from '../hooks/useGetFollowings'
var ManualTrue = false;
const LandingMainPage = ({ userDetails }) => {
  const [tab, setTab] = useState(0);
  console.log(userDetails);
  const [stories, setStories] = useState([
    { id: 1, title: "hanan" },
    { id: 2, title: "hanan" },
    { id: 3, title: "hanan" },
  ]);
  const [users, setUsers] = useState([
    {
      id: 1,
      displayName: "Hanna",
      photoURL: "",
      email: "hananwaqar7@gmail.com",
    },
    {
      id: 1,
      displayName: "Hanna",
      photoURL: "",
      email: "hananwaqar7@gmail.com",
    },
    {
      id: 1,
      displayName: "Hanna",
      photoURL: "",
      email: "hananwaqar7@gmail.com",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [userLoading, setUserLoading] = useState(true);
  const [dataRender, setDataRender] = useState(true);
  const [userManual, setUserManual] = useState(false);
  const [addUser, setAddUser] = useState(null);
  const { usersData, LoadingUser ,executeGetUser } = useGetUserHooks({manual:userManual});
  const { titleData, LoadinPost ,executeGetPost } = useGetPostHooks({manual:userManual});
  const { getFollow, executeGetFollow } = useGetFollowHooks({manual:userManual});
  const [userPosts, setUserPosts] = useState(null);
  const [userFetch, setUserFetch] = useState(null);
  const [copyUserPosts, setCopyUserPosts] = useState(null);
  const [userDataId, setUserDataId] = useState(null);
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
      setCopyUserPosts(userPost);
    }
  }, [search]);
  useEffect(() => {
    const fetchData = async() => {
    setUserPosts(titleData);
    setUserFetch(usersData)
    setCopyUserPosts(titleData);
    var  user_id = await window.sessionStorage.getItem("id");
    
      setUserDataId(user_id)
    }
    fetchData()
  }, [LoadinPost,LoadingUser]);
  const deleteToList = async (id,post_id) => {
    
    var  user_id = await window.sessionStorage.getItem("id");
  
    await axios.delete(`${endpoint}bookmarks/${post_id}`).then(async res => {
      window.location.reload();  
    }).catch(async err=>{
    
      window.location.reload();
    })
    
   
  
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
  const addToList = async (id,userid) => {

    var  user_id = await window.sessionStorage.getItem("id");
     console.log("Id-------------->",id)
    await executeSavePost({
      data: { post_id: id, user_id: parseInt(user_id) },
    })
    window.location.reload();
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
  useEffect(()=>{
    executeGetUser()
    executeGetFollow()
   },[addUser])
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

  return (
    <div className="landing-main">
      <div className="landing-main-container">
        <div className="landing-main-left">
          <div className="landing-main-tabs">
            <div
              onClick={() => setTab(0)}
              className={`tab ${tab === 0 && "active"}`}
            >
              <span>Published</span>
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

              {(search == "" ? userPosts : copyUserPosts)?.map((item) => (
              item.author_id == userDataId &&  <LandingRecommendedPost dataItem={item} userDataId={userDataId} deleteToList = {(id,post_id)=>deleteToList(id,post_id)} addToList={(id)=>addToList(id)}  tab1={true}/>
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
              <WhoToFollow key={data?.id} data={data} addFollowToList={(id)=>addFollowToList(id)}  userDataId={userDataId}  deleteFollowUser = {(id,follow_id)=>deleteFollowUser(id,follow_id)}   getFollow={getFollow} />
            ))}
            {[...Array(5)].map((_, idx) => {
              return (
                <>
                  {userLoading && (
                    <Skeleton key={idx} active avatar paragraph={{ rows: 1 }} />
                  )}
                </>
              );
            })}

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
