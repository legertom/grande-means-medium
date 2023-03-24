import React, { useState, useEffect } from "react";
// import {useHistory} from 'react-router'
import { Link, useHistory } from "react-router-dom";
import { Avatar, Popover } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import "./SidebarAccount.css";
import { useStateValue } from "../../context/StateContextProvider";
// import db from '../../firebase'

const SidebarAccount = () => {
  const history = useHistory();
  const [{ user }] = useStateValue();
  const [profile, setProfile] = useState(user);

  const [anchorEl, setAnchorEl] = useState(null);
  const onClickExpand = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);
  const id = open ? "post-popover" : undefined;

  const signout = () => {
    // localStorage.clear()
    // window.location.push('/')
    window.sessionStorage.clear();
    history.push("/");
    window.location.reload();
  };

  // useEffect(() => {
  //     db.collection('Users').doc(user.id).onSnapshot(res=>{
  //         setProfile(res.data())
  //     })
  // }, [])

  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        style={{
          transform: "translate(2rem, -1rem)",
        }}
      >
        <ul className="post__expandList">
          <li onClick={signout} className="logoutBtn">
            <h3>Sign out</h3>
          </li>
          <li  className="logoutBtn">
            <h3>Refine recommendations</h3>
          </li>
          <li  className="logoutBtn">
            <h3>Manage publications</h3>
          </li>
          <li  className="logoutBtn">
            <h3>Stats</h3>
          </li>
          <li  className="logoutBtn">
            <h3>Settings</h3>
          </li>
          <div className="user__item nocursor">
            <div className="user__details">
              <h4>{`${profile && profile.username}`}</h4>
              <div>
                <span>{`${profile && profile.email}`}</span>
              </div>
            </div>
          </div>
          <div className="CenterDiv">
            <Link
            to="/profile"
              // onClick={() => history.push("/profile")}
              // style={{
              //   marginLeft: "auto",
              // }}
            >
            <button>
              View Profile
              </button>
            </Link>
          </div>
        </ul>
      </Popover>

      <div
        className="sidebarAccount__wrapper"
        aria-describedby={id}
        variant="contained"
        onClick={onClickExpand}
      >
        <div className="sidebarAccount__ava">
          <Avatar src={profile && profile.photoUrl} />
        </div>
        {/* <div className='sidebarAccount__userData' >
                <h2>{profile &&  profile.firstName}</h2>
                <h2>{profile && `@${profile.username}`}</h2>
                </div> */}
        {/* <div className='sidebarAccount__expandIcon'>
                    <ExpandMoreIcon />
                </div> */}
      </div>
    </>
  );
};

export default SidebarAccount;
