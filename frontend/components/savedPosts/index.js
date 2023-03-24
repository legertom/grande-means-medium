import React, { useEffect, useState } from "react";
import LandingRecommendedPost from "./LandingRecommendedPost";
import "./LandingMainPage.css";
import WhoToFollow from "./WhoToFollow";
import { Link } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "antd";
import useGetPostHooks from "../hooks/getBookmarks";
import { TextField } from "@mui/material";
import { Button, Box, Typography } from "@mui/material";
import useFollowUserHook from '../hooks/followUserHook'
import useGetUserHooks from "../hooks/getUsers";
import { endpoint } from "../config/config";
import useGetFollowHooks from '../hooks/useGetFollowings'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const LandingMainPage = ({ userDetails }) => {
  const [tab, setTab] = useState(0);
  
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
  const { data, LoadinPost,executeGetPost } = useGetPostHooks();
  const [userPosts, setUserPosts] = useState(null);
  const [userManual, setUserManual] = useState(false);
  const [deleteUser, setDeleteUser] = useState(null);
  const [addUser, setAddUser] = useState(null);
  const [addPost, setAddPost] = useState(null);
  const [userFetch, setUserFetch] = useState(null);
  const [copyUserPosts, setCopyUserPosts] = useState(null);
  const [userDataId, setUserDataId] = useState(null);
  const { executeFollowUser } = useFollowUserHook()
  const { getFollow, executeGetFollow } = useGetFollowHooks({manual:userManual});
  const { usersData, LoadingUser ,executeGetUser } = useGetUserHooks({manual:userManual});

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
    const fetchData = async() => {

    setUserFetch(usersData)
   
    var  user_id = await window.sessionStorage.getItem("id");
      setUserDataId(user_id)
    }
    fetchData()
  }, [LoadingUser]);
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
     
      
      setUserPosts(data);
      setCopyUserPosts(data);
  
  }, [LoadinPost]);
  useEffect(()=>{
const fetchData = async() => {
  var  user_id = await window.sessionStorage.getItem("id");
  executeGetPost({
    data:{
      user:parseInt(user_id)
    }
  })
}
fetchData()
  },[])
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
  useEffect(()=>{
    executeGetFollow()
    executeGetUser()
    
   },[addUser])
   const addFollowToList = async (id) => {

    var  user_id = await window.sessionStorage.getItem("id");
   
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
  const deleteToList = async (id,post_id) => {
   
     
      await axios.delete(`${endpoint}destroy_all`).then(async res => {
        toast.success("All posts are deleted successfully")
        window.location.reload()
      }).catch(async err=>{
       
    })
  }
   
  return (
    <div className="landing-main">
      <div className="landing-main-container">
        <div className="landing-main-left">
          <Box className="clear-button">
        <Button
            className="SignUp_button"
            component="label"
            // disabled={isLoading}
            onClick={() => deleteToList()}
            variant="contained"
          >
            <Typography> Clear All</Typography>
            {/* {isLoading && <CircularProgress style={{ height: 24, width: 24 }} />}
								{!isLoading && (
									<Typography variant="body1"><strong>{t.create}</strong></Typography>
								)} */}
          </Button>
          </Box>
          <div className="landing-main-tabs">
          
            <div
              onClick={() => setTab(0)}
              className={`tab ${tab === 0 && "active"}`}
            >
              <span>Saved</span>
            </div>
            <div
              onClick={() => setTab(1)}
              className={`tab ${tab === 1 && "active"}`}
            >
              <span>Highlights</span>
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
                <LandingRecommendedPost dataItem={item}  />
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
            <ToastContainer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMainPage;
