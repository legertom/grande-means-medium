import { Avatar } from "antd";
import React from "react";
// import { truncate } from "../../helpers/truncate";
// import Avatar from "react-avatar";

const WhoToFollow = ({ data,addFollowToList ,deleteFollowUser ,userDataId ,getFollow }) => {
  function userExists(id) {
    return getFollow?.find(function(el) {
      return (el.followed_id  == parseInt(userDataId) && (el.follower_id == id))
    }); 
  }
  
  return (
    data.id != parseInt(userDataId) && (
<div className="follow-content">
      {/* <Avatar
        size={40}
        // round={true}
        src={data?.photoURL}
      /> */}
      <div className="info">
        <h3>{data?.username}</h3>
        <span>{data?.email}</span>
      </div>
      {userExists(data.id) ? (
      <button
      onClick={()=>deleteFollowUser(data.id , data.follow_id)}
        style={{
          marginLeft: "auto",
        }}
      >
        Followed
      </button>
      ) : (
        <button
      onClick={()=>addFollowToList(data.id)}
        style={{
          marginLeft: "auto",
        }}
      >
        Follow
      </button>
      )}
    </div>
    )
    
  );
};

export default WhoToFollow;
