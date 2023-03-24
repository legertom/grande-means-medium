import React, { useEffect, useState } from "react";
import LandingRecommendedPost from "./LandingRecommendedPost";
import "./LandingMainPage.css";
import WhoToFollow from "./WhoToFollow";
import { Link } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "antd";
import useGetPostHooks from "../hooks/getBookmarks";
import { TextField } from "@mui/material";
import useFollowUserHook from '../hooks/followUserHook'
import useGetUserHooks from "../hooks/getUsers";
import { endpoint } from "../config/config";
import useGetFollowHooks from '../hooks/useGetFollowings'
import { Avatar, Popover } from "@mui/material";
import { useStateValue } from "../../context/StateContextProvider";

const LandingMainPage = ({ userDetails }) => {
  const [tab, setTab] = useState(0);

  console.log(userDetails);
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
  const [{ user }] = useStateValue();
  const [profile, setProfile] = useState(user);

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
      <div className="new-landing-main-container">
        <div className="landing-main-left">
          <div className="landing-main-tabs">
            <div
              onClick={() => setTab(0)}
              className={`tab ${tab === 0 && "active"}`}
            >
              <span>Home</span>
            </div>
            <div
              onClick={() => setTab(1)}
              className={`tab ${tab === 1 && "active"}`}
            >
              <span>About</span>
            </div>
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
          <div className="new-recommended-topics">
          <br/>
          <br/>
          <br/>
          <button
          style={{height:50,backgroundColor:'#000',color:'#fff'}}
          // onClick={()=>history.push('/profile')}
        // style={{
        //   marginLeft: "auto",
        // }}
      >
       Get unlimited access
      </button>
          </div>
          <br/>
          <br/>
        
          <TextField
            className="SignUp_input"
            id="email"
            // style={{marginTop:50}}
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
 <br/>
          <br/>
          <br/>
          <Avatar src={profile && profile.photoUrl} style={{width:100,height:100,marginLeft:10}} />
          <br/>
              <h1 style={{marginLeft:30}}>{`${profile && profile.username}`}</h1>
              <br/>
              <br/>
           
        
            <Link
            style={{marginLeft:30,fontSize:18,textDecoration:'none',color:'green'}}
            to="/editProfile"
            
              // onClick={() => history.push("/profile")}
              // style={{
              //   marginLeft: "auto",
              // }}
            >
          
             Edit Profile
             
            </Link>
         
          
        </div>
      </div>
    </div>
  );
};

export default LandingMainPage;
