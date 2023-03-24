import React, { useEffect, useState ,useLayoutEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { actionTypes } from "../context/StateReducers";

import Splash from "./splash/splash";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { useStateValue } from "../context/StateContextProvider";
import Home from "../components/dashboard";
import Published from "../components/published";
import SavePosts from "../components/savedPosts";
import Profile from "../components/profile"
import ViewStory from "../components/single";
import Sidebar from "./sideBar";
import PostBox from "./post";
import EditPostBox from "./edit_post";
import EditProfile from './ProfileSection'
import FollowProfile from "../components/followProfile"
import PageNotFound from "./NotFound";
import "./App.css";

//import Modal from "./modal/modal";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  
  useLayoutEffect(() => {
    const email = window.sessionStorage.getItem("email");
    const username = window.sessionStorage.getItem("username");
    var User;
    if (!email) {
      User = null;
    } else {
     User = JSON.parse(window.sessionStorage.getItem("userData"))
      // User = {
      //   email: email,
      //   username: username,
      // };
    }
    
    dispatch({
      type: actionTypes.SET_USER,
      user: User,
    });
  }, []);
  // componentDid

  return (
    <div className="app">
      {/* //<Modal /> */}

      {user ? (
        <div className="app__mainContent">
          <Sidebar />
          {/* http://localhost:8080/1 */}
          <Switch>
            <AuthRoute exact path="/" component={Home} />
            <AuthRoute exact path="/saved" component={SavePosts} />
            <AuthRoute exact path="/story/:id" component={ViewStory} />
            <AuthRoute exact path="/posts" component={PostBox} />
            <AuthRoute exact path="/profile" component={Profile} />
             <AuthRoute exact path="/editProfile" component={EditProfile} />
            <AuthRoute exact path="/published" component={Published} />
            <AuthRoute exact path="/Edit_Post" component={EditPostBox} />
            <AuthRoute exact path="/followProfile/:id" component={FollowProfile} />
            <Route path="*" component={PageNotFound}/>
          </Switch>
        </div>
      ) : (
        <Splash />
        // <Switch>
        //   <AuthRoute exact path="/splash" component={Splash} />
        // </Switch>
      )}
    </div>
  );
};

export default App;
