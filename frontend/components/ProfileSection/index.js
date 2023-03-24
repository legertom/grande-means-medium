import React from "react";
// import "../ProfileSectionAdmin/admin.css";
import {
  ProfileTabs,
  Tab,
  TabImage,
  TabName,
  ProfileGalleryContainer,
  ProfileGalleryTop,
  GalleryRadio,
  RdoText,
  RadioButton,
  SortingDropDown,
  ErrorText,
  GalleryTitle,
  ProfileGalleryBottom,
} from "../ProfileSection/ProfileElements";
import {
  Dialog,
  DialogContent,
  Box,
  Button,
  CircularProgress,
  Divider,
  InputAdornment,
  Link,
  TextField,
  Avatar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import ModalComing from "./common/ModalComing";
import EventDisplayCard from "./common/eventDisplayCard";
import { endpoint } from "../config/config";
// import layouts from "../../images/layouts.png";
// import findevents from "../../images/findevents.png";

const NumberFormat = (num) => {
  if (num > 999999) {
    return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(0) + "M";
  } else if (num > 999) {
    return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K";
  } else {
    return num;
  }
};

const clipString = (str) => {
  if (str != undefined) {
    return str.length > 40 ? str.substring(0, 40) + "..." : str;
  } else {
    return "";
  }
};

const iterator = (a, p, n) => {
  var current = p,
    l = a.length;
  return function () {
    let end = current + n;
    var part = a.slice(current, end);
    current = end < l ? end : 0;
    return part;
  };
};

class ProfileSection extends React.Component {
  constructor(props) {
    super(props);
    this.url = "iihkjhjkhjkhkhk";
    this.state = {
      edit:false,
      shortBio:'',
      firstname: "",
      lastname: "",
      profile: {
        myevents: [
          {
            name: "umer gujjar",
            date: "2019/12/12",
            time: "19:00",
            location: "San Francisco",
            description: "Lorem ipsum dolor sit amet, consectetur",
            image: "../../images/event1.jpg",
            commentscount: "10",
            likescount: "10",
            sharescount: "10",
          },
          {
            name: "umer gujjar",
            date: "2019/12/12",
            time: "19:00",
            location: "San Francisco",
            description: "Lorem ipsum dolor sit amet, consectetur",
            image: "../../images/event1.jpg",
            commentscount: "10",
            likescount: "10",
            sharescount: "10",
          },
          {
            name: "umer gujjar",
            date: "2019/12/12",
            time: "19:00",
            location: "San Francisco",
            description: "Lorem ipsum dolor sit amet, consectetur",
            image: "../../images/event1.jpg",
            commentscount: "10",
            likescount: "10",
            sharescount: "10",
          },
        ],
        trending: [
          {
            name: "umer gujjar",
            date: "2019/12/12",
            time: "19:00",
            location: "San Francisco",
            description: "Lorem ipsum dolor sit amet, consectetur",
            image: "../../images/event1.jpg",
            commentscount: "10",
            likescount: "10",
            sharescount: "10",
          },
          {
            name: "umer gujjar",
            date: "2019/12/12",
            time: "19:00",
            location: "San Francisco",
            description: "Lorem ipsum dolor sit amet, consectetur",
            image: "../../images/event1.jpg",
            commentscount: "10",
            likescount: "10",
            sharescount: "10",
          },
          {
            name: "umer gujjar",
            date: "2019/12/12",
            time: "19:00",
            location: "San Francisco",
            description: "Lorem ipsum dolor sit amet, consectetur",
            image: "../../images/event1.jpg",
            commentscount: "10",
            likescount: "10",
            sharescount: "10",
          },
        ],
        myartist: [
          {
            name: "umer gujjar",
            date: "2019/12/12",
            time: "19:00",
            location: "San Francisco",
            description: "Lorem ipsum dolor sit amet, consectetur",
            image: "../../images/event1.jpg",
            commentscount: "10",
            likescount: "10",
            sharescount: "10",
          },
          {
            name: "umer gujjar",
            date: "2019/12/12",
            time: "19:00",
            location: "San Francisco",
            description: "Lorem ipsum dolor sit amet, consectetur",
            image: "../../images/event1.jpg",
            commentscount: "10",
            likescount: "10",
            sharescount: "10",
          },
          {
            name: "umer gujjar",
            date: "2019/12/12",
            time: "19:00",
            location: "San Francisco",
            description: "Lorem ipsum dolor sit amet, consectetur",
            image: "../../images/event1.jpg",
            commentscount: "10",
            likescount: "10",
            sharescount: "10",
          },
        ],
        upcomming: [
          {
            name: "umer gujjar",
            date: "2019/12/12",
            time: "19:00",
            location: "San Francisco",
            description: "Lorem ipsum dolor sit amet, consectetur",
            image: "../../images/event1.jpg",
            commentscount: "10",
            likescount: "10",
            sharescount: "10",
          },
          {
            name: "umer gujjar",
            date: "2019/12/12",
            time: "19:00",
            location: "San Francisco",
            description: "Lorem ipsum dolor sit amet, consectetur",
            image: "../../images/event1.jpg",
            commentscount: "10",
            likescount: "10",
            sharescount: "10",
          },
          {
            name: "umer gujjar",
            date: "2019/12/12",
            time: "19:00",
            location: "San Francisco",
            description: "Lorem ipsum dolor sit amet, consectetur",
            image: "../../images/event1.jpg",
            commentscount: "10",
            likescount: "10",
            sharescount: "10",
          },
        ],
      },
      loading: false,
      search: {
        keywords: "",
        events: [],
        display: false,
        options: {
          eventtype: 0,
          page: 0,
          perPage: 20,
        },
        totalPage: 0,
      },
      errors: [],
    };
  }

  componentDidMount() {
    // this.loadProfile();
    // let firstname = window.sessionStorage.getItem("Fname");
    // this.setState({ firstname: firstname });
    // let lastname = window.sessionStorage.getItem("Lname");
    // this.setState({ lastname: lastname });
    let User = JSON.parse(window.sessionStorage.getItem("userData"));
    this.setState({ user: User , username:User.username , shortBio : User.bio,photoUrl:User.photoUrl });
  }

  async loadProfile() {
    this.setState({ loading: true });
    await axios
      .get(`${this.url.Profile}/1`)
      .then((response) => {
        console.log("response of the Profile Screen is-->>", response);

        this.setState({ profile: response.data });
      })
      .catch((res) => {
        console.log("response of the res Screen is-->>", res);

        let errors = {};
        let resError = "";

        if (
          res.response !== undefined &&
          res.response.data !== undefined &&
          typeof res.response.data == "string"
        ) {
          resError += res.response.data + "\n";
        } else if (
          res.response !== undefined &&
          res.response.data !== undefined
        ) {
          res.response.data.forEach((d) => {
            resError += d.description + "\n";
          });
        } else if (res.message !== undefined) {
          resError += res.message + "\n";
        }

        errors.response = resError;

        this.setState({
          errors: errors,
          loading: false,
        });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      var state = this.state;
      console.log(`searching for ${state.search.keywords}...`);
      state.search.options.page = 0;
      this.setState(state);
      this.search();
    }
  };

  onSearchClick = () => {
    var state = this.state;
    console.log(`searching for ${state.search.keywords}...`);
    state.search.options.page = 0;
    this.setState(state);
    this.search();
  };

  handleChange = (event) => {
    var state = this.state;
    state.search.keywords = event.target.value;
    this.setState(state);
  };

  onEventTypeChanged = (event) => {
    var state = this.state;
    console.log(event.target.value);
    state.search.options.eventtype = event.target.value;
    console.log(state.search.options.eventtype);
    this.setState(state);
  };

  displaySearch = (show) => {
    if (show) {
      return "block";
    }

    return "none";
  };

  noEvents = (count) => {
    if (count == 0) {
      return <ErrorText>No events found</ErrorText>;
    }
  };
  saveProfile = async() => {
    
    let userData = {
      "bio":this.state.shortBio,
      "photoUrl":this.state.user.photoUrl
    }
  let id = await window.sessionStorage.getItem("id");
   await axios.put(`${endpoint}profiles/${id}`,userData)
   if(this.state.username != ''){
    let user = {
      "username":this.state.username
     }
   
     await axios.put(`${endpoint}users/${id}`,user).then(async res=>{
      await window.sessionStorage.setItem("userData",JSON.stringify(res.data))
      this.setState({user:res.data,edit:false})
      alert("Your data is edited successfully")
      window.location.reload(false);
     })
   }
  
  }
  search = () => {
    var state = this.state;
    state.loading = true;
    this.setState(state);
    let keywords = state.search.keywords;
    let nextpage = state.search.options.page + 1;
    let eventype = state.search.options.eventtype;
    let perPage = state.search.options.perPage;
    let fullurl = `${this.url.Search}/${eventype}/${nextpage}/${perPage}?keyword=${keywords}&sort=0&order=0`;
    console.log(fullurl);
    axios
      .get(fullurl)
      .then((response) => {
        let totalpage = Math.round(
          response.data.totalCount / state.search.options.perPage
        );
        state.search.totalPage = totalpage;
        state.search.events = response.data.events;
        state.search.display = true;
        this.setState(state);
      })
      .catch((res) => {
        let errors = {};
        let resError = "";

        if (
          res.response !== undefined &&
          res.response.data !== undefined &&
          typeof res.response.data == "string"
        ) {
          resError += res.response.data + "\n";
        } else if (
          res.response !== undefined &&
          res.response.data !== undefined
        ) {
          res.response.data.forEach((d) => {
            resError += d.description + "\n";
          });
        } else if (res.message !== undefined) {
          resError += res.message + "\n";
        }

        errors.response = resError;

        state.errors = errors;
        this.setState(state);
        console.log(errors);
      })
      .finally(() => {
        state.loading = false;
        this.setState(state);
      });
  };

  page = (p) => {
    let events = this.state.search.events;
    let next = iterator(events, p, 5);
    return next();
  };
  imageUploader = async(file)=>{
    let cloud_name = 'doxpyn6x3';
    let upload_preset = 'blmy4zym';
    var imageData = new FormData();

    imageData.append('file', file);
    imageData.append('upload_preset', upload_preset);
    imageData.append('cloud_name', cloud_name);
   
   
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
          method: 'POST',
          body: imageData,
        },
      );
      const body = await res.json();

      console.log('res body => ', body);
      this.setState(prevState => ({
        user: {                   // object that we want to update
            ...prevState.user,    // keep all other key-value pairs
            photoUrl: body.url      // update the value of specific key
        }
    }))
      // this.setState({ user: { photoUrl: body.url } });
  }
  render() {
    
    const { profileImage } = this.props;
    return (
      <>
        <div style={{ overflow: "hidden", width: "100%" }}>
          {/* banner Section start*/}

          <div
            className="row"
            // style={{ position: "absolute", top: "40%", left: "40%" }}
          >
            <div
              className="col"
              id="bannermain"
              style={{ background: `url(${profileImage})` }}
            >
              <div
                className="row"
                id="bannertext"
                style={{ position: "absolute", top: "55%", left: "40%" }}
              >
                <div className="col" id="profilenamebox">
                  <h1 className="text-white pb-0 mb-0">
                    {clipString(
                      `${this.state.firstname} ${this.state.lastname}`
                    )}
                  </h1>
                  {/* <p
                    className="text-warning pt-0 mt-0 position-relative ml-4"
                    style={{ fontSize: "11px", left: "0px" }}
                  >
                    The one and only ...
                  </p> */}
                  {/* <div className="row mt-5">
                    <div className="col">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control searchInput"
                          placeholder="Search for Events"
                          aria-label="Search for Events"
                          aria-describedby="basic-addon2"
                          onChange={(event) => this.handleChange(event)}
                          onKeyDown={(event) => this.handleKeyDown(event)}
                        />
                        <div class="input-group-append">
                          <button
                            class="btn btncolor1 text-white"
                            type="button"
                            onClick={this.onSearchClick}
                            style={{ zIndex: "1" }}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* banner Section end */}
          {/* body Section start*/}
          {/* TOGGLE */}
          <div className="row">
            <div className="col-md-3 toggleimg pr-0" id="hamberController">
              <div
                className="row toggleimg1 m-0 p-0"
                style={{ background: `url(${profileImage})` }}
              >
                <div
                  className="col position-absolute"
                  style={{ zIndex: "1", bottom: "15px" }}
                >
                  {/* <div className="row d-flex  justify-content-around">
                    <div className="col d-flex flex-column">
                      <button
                        className="btn btncolor1 "
                        style={{ width: "100px", fontSize: "12px" }}
                      >
                        FOLLOW
                      </button>
                      <p className=" text-center text-white ml-n4 mt-2">
                        {NumberFormat(this.state.profile.followers)}
                      </p>
                    </div>

                    <div className="col d-flex flex-column">
                      <button
                        className="btn btncolor2"
                        style={{ width: "100px", fontSize: "12px" }}
                      >
                        FOLLOWING
                      </button>
                      <p className="text-center text-white ml-n4 mt-2">
                        {NumberFormat(this.state.profile.following)}
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>

              <Box
                pb={2}
                width="100%"
                className="row"
                style={{
                  // backgroundColor: "#1E1E1E",
                  marginRight: "0px",
                  flexDirection: "row",
                  display: "flex",
                }}
              >
                <div style={{ width: "30%" }}>
                  <ProfileTabs>
                    <h1 style={{ marginLeft: 63 }}>Settings</h1>
                    <Tab active>
                      <TabImage>
                        {/* <img
                          src={layouts}
                          tag="tag"
                          style={{ width: "100%" }}
                        /> */}
                      </TabImage>
                      <TabName>About you</TabName>
                    </Tab>
                    {/* <Tab to="/message" onClick={toggleHome}>
                      <TabImage>
                        <img
                          src={mailbox}
                          tag="tag"
                          style={{ width: "100%" }}
                        />
                      </TabImage>
                      <TabName>Mailbox</TabName>
                    </Tab> */}
                    <Tab data-toggle="modal" data-target="#modalcomming">
                      <TabImage>
                        {/* <img
                          src={findevents}
                          tag="tag"
                          style={{ width: "100%" }}
                        /> */}
                      </TabImage>
                      <TabName>Design</TabName>
                    </Tab>
                    {/* <Tab>
                      <TabImage>
                        <img
                          src={findartist}
                          tag="tag"
                          style={{ width: "100%" }}
                        />
                      </TabImage>
                      <TabName>Find Artists</TabName>
                    </Tab> */}
                    <Tab to="/event">
                      <TabImage>
                        {/* <img
                          src={findevents}
                          tag="tag"
                          style={{ width: "100%" }}
                        /> */}
                      </TabImage>
                      <TabName>Audience development</TabName>
                    </Tab>
                    {/* <Tab>
                      <TabImage>
                        <img
                          src={hotstuff}
                          tag="tag"
                          style={{ width: "100%" }}
                        />
                      </TabImage>
                      <TabName>Hot Shows</TabName>
                    </Tab> */}
                    {/* <Tab>
                      <TabImage>
                        <img
                          src={mystuff}
                          tag="tag"
                          style={{ width: "100%" }}
                        />
                      </TabImage>
                      <TabName>My Stuff</TabName>
                    </Tab> */}
                    <Tab to="/event">
                      <TabImage>
                        {/* <img
                          src={livenow}
                          tag="tag"
                          style={{ width: "100%" }}
                        /> */}
                      </TabImage>
                      <TabName>Email settings</TabName>
                    </Tab>
                    {/* <Tab>
                      <TabImage>
                        <img
                          src={favorites}
                          tag="tag"
                          style={{ width: "100%" }}
                        />
                      </TabImage>
                      <TabName>Favorites</TabName>
                    </Tab>
                    <Tab>
                      <TabImage>
                        <img
                          src={podcast}
                          tag="tag"
                          style={{ width: "100%" }}
                        />
                      </TabImage>
                      <TabName>Podcasts</TabName>
                    </Tab>
                    <Tab>
                      <TabImage>
                        <img
                          src={recommendation}
                          tag="tag"
                          style={{ width: "100%" }}
                        />
                      </TabImage>
                      <TabName>Recommendations</TabName>
                    </Tab> */}

                    <Tab data-toggle="modal" data-target="#modalcomming">
                      <TabImage>
                        {/* <img
                          src={settings}
                          tag="tag"
                          style={{ width: "100%" }}
                        /> */}
                      </TabImage>
                      <TabName>Connections</TabName>
                    </Tab>
                    <Tab data-toggle="modal" data-target="#modalcomming">
                      <TabImage>
                        {/* <img
                          src={pagesettings}
                          tag="tag"
                          style={{ width: "100%" }}
                        /> */}
                      </TabImage>
                      <TabName>Account</TabName>
                    </Tab>
                    <Tab data-toggle="modal" data-target="#modalcomming">
                      <TabImage>
                        {/* <img
                          src={orderhistory}
                          tag="tag"
                          style={{ width: "100%" }}
                        /> */}
                      </TabImage>
                      <TabName>Membership</TabName>
                    </Tab>
                    <Tab data-toggle="modal" data-target="#modalcomming">
                      <TabImage>
                        {/* <img src={artist} tag="tag" style={{ width: "100%" }} /> */}
                      </TabImage>
                      <TabName>Integration tokens</TabName>
                    </Tab>
                    <Tab data-toggle="modal" data-target="#modalcomming">
                      <TabImage>
                        {/* <img
                          src={friends}
                          tag="tag"
                          style={{ width: "100%" }}
                        /> */}
                      </TabImage>
                      <TabName>Security</TabName>
                    </Tab>
                  </ProfileTabs>

                  {/* Modal */}

                 

                  {/* Modal */}
                </div>

                {/* toggle end */}
                {/* body start */}

                <Box
                  className="col mt-4"
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 35,
                  }}
                >
                  <div style={{flexDirection:'row',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <div>
                    <h1>About You</h1>
                    </div>
                    <div style={{flexDirection:'row',display:'flex',alignItems:'center',marginRight:30,marginTop:-20}}>
                    {this.state.edit ==false ? (
                      <Button  type="button"
                className="tweetBox__tweetButton" 
               onClick={() => this.setState({edit:true})}
               >
               
                
                 Edit
                </Button>
                    ) : (
                      <Button  type="button"
                className="tweetBox__tweetButton" 
               onClick={() => this.saveProfile()}
               >
               
                
                 Save
                </Button>
                    )} 
                {/* <Button  type="button"
                className="tweetBox__tweetButton" 
              //  onClick={() => this.props.generatePost(this.state.body,this.state.title,this.state.subtitle)}
               >
               
                
                  Publish
                </Button> */}
                    </div>
                  </div>
                  <br />
                  <hr />
                  <br />
                  <div>
                    <h2 style={{ textAlign: "start" }}>Name</h2>
                  </div>
                  <br/>
                
                  {this.state.user && (
                    <div>
                      {/* <h2 style={{textAlign:'start'}}>{this.state.user.username}</h2> */}
                      <TextField
                        // className="SignUp_input"
                        id="firstName"
                        onChange={({ target }) => this.setState({username:target.value})}
                        placeholder={"Enter username"}
                        autoFocus={this.state.edit == false ? false :true}
                        value={this.state.username}
                        autoComplete="off"
                        
                            
                         
                        InputProps={{  readOnly: this.state.edit == false ? true :false , }}
                        variant="outlined"
                      />
                    </div>
                  )}
                  <br/>
                  <p>Your name appears on your Profile page, as your byline, and in your responses. It is a required field.</p>
                  <br/>
                  <br/>
                  <div>
                    <h2 style={{ textAlign: "start" }}>Short bio</h2>
                  </div>
                  <br/>
                
                  {this.state.user && (
                    <div>
                      {/* <h2 style={{textAlign:'start'}}>{this.state.user.username}</h2> */}
                      <TextField
                        // className="SignUp_input"
                        id="firstName"
                        onChange={({ target }) => this.setState({shortBio:target.value})}
                        placeholder={"Add your short bio"}
                        autoFocus={this.state.edit == false ? false :true}
                        value={this.state.shortBio}
                        autoComplete="off"
                        InputProps={{  readOnly: this.state.edit == false ? true :false , }}
                        variant="outlined"
                      />
                    </div>
                  )}
                  <br/>
                  <p>Your short bio appears on your Profile and next to your stories. Max 160 characters.</p>
                 
                  <br/>
                  <br/>
                  <div>
                    <h2 style={{ textAlign: "start" }}>Photo</h2>
                  </div>
                  {!this.state.edit && (
                    <>
                    <br/>
                  <br/>
                  </>
                  )}
                 
                  <div style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                  <div>
                  <p>Your photo appears on your Profile page and with your stories across Medium.</p>
                  <br/>
                  <br/>
                  <p>Recommended size: Square, at least 1000 pixels per side. File type: JPG, PNG or GIF.</p>
                  </div>
                  <div>
                 {this.state.user?.photoUrl ? (
                  <Avatar src={ this.state?.user?.photoUrl} style={{width:100,height:100,marginLeft:60}} />
                 ) : (
                  <Avatar  style={{width:100,height:100,marginLeft:60}} />
                 )}  
                 {this.state.edit && (
                  <>
                  <br/>
                  <input
                id="banner"
                label="Event Thumbnail"
                placeholder="Browser"
                placeholderTextColor="red"
                onChange={(e) => this.imageUploader(e.target.files[0])}
                type="file"
                // value={bannerImage}
                width={560}
              />
              </>
                 )}
                 </div>
                  </div>
                </Box>
              </Box>
            </div>
          </div>

          {/* body */}
          {/* body start */}
          {/* body Section start*/}
        </div>
      </>
    );
  }
}

export default ProfileSection;

export const svg1 = (
  <svg
    width="45"
    height="45"
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25.5" cy="25.5" r="25.5" fill="black" />
    <circle cx="25" cy="26" r="15" stroke="#1FB5FC" stroke-width="2" />
    <ellipse cx="17.5" cy="37" rx="7.5" ry="7" fill="black" />
    <path
      d="M20.6264 30.375L23.5014 28.9375L33.5639 18.875L32.1264 17.4375L22.0639 27.5L20.6264 30.375ZM18.4989 35.4753C17.7888 33.9759 17.0241 33.2126 15.5247 32.5011L17.75 26.3744L20.625 24.625L29.25 16H24.9375L16.3125 24.625L12 39L26.375 34.6875L35 26.0625V21.75L26.375 30.375L24.6256 33.25L18.4989 35.4753Z"
      fill="white"
    />
  </svg>
);

export const svg2 = (
  <svg
    width="45"
    height="45"
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25.5" cy="25.5" r="25.5" fill="black" />
    <g clip-path="url(#clip0_74_324)">
      <path
        d="M34.1484 27.5156C30.9825 27.5156 28.4062 30.0919 28.4062 33.2578C28.4062 36.4237 30.9825 39 34.1484 39C37.3144 39 40 36.4237 40 33.2578C40 30.0919 37.3144 27.5156 34.1484 27.5156ZM35.7891 34.0781H34.1484C33.695 34.0781 33.3281 33.7112 33.3281 33.2578V31.6172C33.3281 31.1638 33.695 30.7969 34.1484 30.7969C34.6019 30.7969 34.9688 31.1638 34.9688 31.6172V32.4375H35.7891C36.2425 32.4375 36.6094 32.8044 36.6094 33.2578C36.6094 33.7112 36.2425 34.0781 35.7891 34.0781Z"
        fill="#F49600"
      />
      <path
        d="M15.2812 31.6172H13.6406C12.7345 31.6172 12 32.3517 12 33.2578C12 34.1638 12.7345 34.8984 13.6406 34.8984H15.2812C16.1874 34.8984 16.9219 34.1638 16.9219 33.2578C16.9219 32.3517 16.1874 31.6172 15.2812 31.6172Z"
        fill="#F49600"
      />
      <path
        d="M15.2812 23.4141H13.6406C12.7345 23.4141 12 24.1486 12 25.0547C12 25.9607 12.7345 26.6953 13.6406 26.6953H15.2812C16.1874 26.6953 16.9219 25.9607 16.9219 25.0547C16.9219 24.1486 16.1874 23.4141 15.2812 23.4141Z"
        fill="#F49600"
      />
      <path
        d="M15.2812 15.1016H13.6406C12.7345 15.1016 12 15.8361 12 16.7422C12 17.6482 12.7345 18.3828 13.6406 18.3828H15.2812C16.1874 18.3828 16.9219 17.6482 16.9219 16.7422C16.9219 15.8361 16.1874 15.1016 15.2812 15.1016Z"
        fill="#F49600"
      />
      <path
        d="M35.7891 11H17.7422C16.3852 11 15.2812 12.1039 15.2812 13.4609C17.0909 13.4609 18.5625 14.9325 18.5625 16.7422C18.5625 18.5519 17.0909 20.0234 15.2812 20.0234V21.7734C17.0909 21.7734 18.5625 23.245 18.5625 25.0547C18.5625 26.8644 17.0909 28.3359 15.2812 28.3359V29.9766C17.0909 29.9766 18.5625 31.4481 18.5625 33.2578C18.5625 35.0675 17.0909 36.5391 15.2812 36.5391C15.2812 37.8961 16.3852 39 17.7422 39H29.5653C27.8728 37.6459 26.7656 35.589 26.7656 33.2578C26.7656 29.1867 30.0773 25.875 34.1484 25.875C35.6656 25.875 37.1852 26.337 38.3594 27.1248V13.4609C38.3594 12.1039 37.1461 11 35.7891 11ZM26.5253 28.9159L23.244 32.1971C23.0838 32.3574 22.8739 32.4375 22.6641 32.4375C22.4542 32.4375 22.2443 32.3574 22.0841 32.1971L20.2127 30.3258C19.8923 30.0054 19.8923 29.4862 20.2127 29.1658C20.5332 28.8454 21.0523 28.8454 21.3727 29.1658L22.6641 30.4572L25.3654 27.7559C25.6858 27.4355 26.2049 27.4355 26.5253 27.7559C26.8457 28.0763 26.8457 28.5955 26.5253 28.9159ZM26.5253 22.3534L23.2441 25.6346C23.0838 25.7949 22.874 25.875 22.6641 25.875C22.4543 25.875 22.2443 25.7949 22.0842 25.6346L20.2128 23.7633C19.8923 23.4429 19.8923 22.9238 20.2127 22.6034C20.5332 22.283 21.0523 22.283 21.3727 22.6034L22.6641 23.8947L25.3654 21.1934C25.6858 20.873 26.2049 20.873 26.5253 21.1934C26.8457 21.5138 26.8457 22.033 26.5253 22.3534ZM26.5253 15.6815L23.2441 18.9628C23.0838 19.123 22.874 19.2031 22.6641 19.2031C22.4543 19.2031 22.2443 19.123 22.0842 18.9628L20.2128 17.0914C19.8923 16.771 19.8923 16.2519 20.2127 15.9315C20.5332 15.6111 21.0523 15.6111 21.3727 15.9315L22.6641 17.2228L25.3654 14.5215C25.6858 14.2011 26.2049 14.2011 26.5253 14.5215C26.8457 14.842 26.8457 15.3611 26.5253 15.6815ZM34.1484 24.2344H29.2266C28.7731 24.2344 28.4062 23.8675 28.4062 23.4141C28.4062 22.9606 28.7731 22.5938 29.2266 22.5938H34.1484C34.6019 22.5938 34.9688 22.9606 34.9688 23.4141C34.9688 23.8675 34.6019 24.2344 34.1484 24.2344ZM34.1484 17.5625H29.2266C28.7731 17.5625 28.4062 17.1956 28.4062 16.7422C28.4062 16.2888 28.7731 15.9219 29.2266 15.9219H34.1484C34.6019 15.9219 34.9688 16.2888 34.9688 16.7422C34.9688 17.1956 34.6019 17.5625 34.1484 17.5625Z"
        fill="#F49600"
      />
    </g>
    <defs>
      <clipPath id="clip0_74_324">
        <rect
          width="28"
          height="28"
          fill="white"
          transform="translate(12 11)"
        />
      </clipPath>
    </defs>
  </svg>
);
export const svg3 = (
  <svg
    width="45"
    height="45"
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25.5" cy="25.5" r="25.5" fill="black" />
    <path
      d="M22.1652 20.0293C23.019 20.5409 23.9758 20.7967 24.933 20.7967C25.89 20.7967 26.8473 20.5408 27.7008 20.0293C29.7315 18.8122 30.8328 16.4045 30.7222 13.4236C30.5977 10.0694 28.0401 8.32544 25.5262 8.02156C25.3372 7.99875 24.6032 7.9932 24.4516 8.00895C23.4987 8.10802 22.5345 8.41374 21.6937 8.93568C21.6405 8.96195 21.1596 9.30391 20.9797 9.45906C19.9388 10.3568 19.2089 11.6701 19.1438 13.4236C19.0333 16.4045 20.1345 18.8122 22.1652 20.0293ZM24.933 9.58432C26.8042 9.66033 28.7194 10.7203 29.0753 12.9184C28.055 13.6087 26.7603 13.7737 25.6047 13.3401C24.2883 12.8463 23.3371 11.6693 22.9407 10.0701C23.5584 9.77161 24.2487 9.61212 24.933 9.58432ZM20.7356 13.4837C20.7719 12.5045 21.0929 11.7191 21.5881 11.1169C22.2019 12.9074 23.4186 14.2344 25.0495 14.8463C26.3715 15.3424 27.821 15.2866 29.0894 14.7334C28.8966 16.5139 28.1244 17.9064 26.8873 18.6478C25.682 19.3702 24.1844 19.3704 22.9789 18.6478C21.4651 17.7405 20.6475 15.8583 20.7356 13.4837ZM40.9096 28.579C40.9016 28.1469 40.5563 27.7985 40.128 27.7906L35.2382 27.6996C35.0206 27.6937 34.8133 27.7805 34.6603 27.9348L27.0585 35.6041C26.9092 35.7548 26.8252 35.9592 26.8252 36.1723C26.8252 36.3853 26.9092 36.5897 27.0585 36.7404L32.0387 41.7647C32.188 41.9153 32.3906 42 32.6018 42C32.813 42 33.0157 41.9153 33.165 41.7647L40.7668 34.0954C40.9197 33.9411 41.0038 33.7306 40.9999 33.5124L40.9096 28.579ZM32.6018 40.0602L28.7479 36.1722L35.5473 29.3125L39.3311 29.3829L39.4011 33.2005L32.6018 40.0602ZM37.9737 31.0515C38.1919 31.4368 38.0593 31.9276 37.6774 32.1477C37.5527 32.2196 37.4169 32.2537 37.2828 32.2537C37.0063 32.2537 36.7376 32.1083 36.5906 31.8488C36.3724 31.4635 36.5049 30.9727 36.8868 30.7526L36.887 30.7524C37.2691 30.5324 37.7555 30.6663 37.9737 31.0515ZM25.7293 26.4416L25.7294 31.2257C25.7294 31.6694 25.3729 32.0292 24.933 32.0292C24.4931 32.0292 24.1366 31.6694 24.1366 31.2257L24.1364 26.4416C24.1364 25.9979 24.493 25.6382 24.9328 25.6382C25.3727 25.6382 25.7293 25.9979 25.7293 26.4416ZM24.9323 38.0287C24.9323 38.4724 24.5757 38.8322 24.1359 38.8322H16.8034C16.5668 38.8322 16.3387 38.7218 16.1873 38.5382C16.036 38.3546 15.9698 38.1085 16.0129 37.8738L17.8924 27.6458C18.5489 24.0702 21.8894 22.4412 24.9121 22.4412C24.9164 22.4412 24.9204 22.4412 24.9247 22.4412C27.949 22.4412 31.2934 24.0681 31.9503 27.6461C32.0303 28.0825 31.7447 28.5121 31.3122 28.5929C30.8794 28.6735 30.4642 28.3857 30.3841 27.9494C29.8935 25.2772 27.2875 24.0757 24.9213 24.0696C22.5551 24.0757 19.9491 25.2783 19.4585 27.9506L17.7537 37.2252H24.1359C24.5757 37.2252 24.9323 37.5849 24.9323 38.0287Z"
      fill="#CD000E"
    />
  </svg>
);
export const svg4 = (
  <svg
    width="45"
    height="45"
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25.5" cy="25.5" r="25.5" fill="black" />
    <path
      d="M35.8385 35.2336V21.0577C35.8385 20.8461 35.667 20.6746 35.4554 20.6746H31.6241C31.4125 20.6746 31.2409 20.8461 31.2409 21.0577V35.2336H30.4747V26.4215C30.4747 26.21 30.3031 26.0384 30.0916 26.0384H26.2602C26.0486 26.0384 25.8771 26.21 25.8771 26.4215V35.2336H25.1108V22.5902C25.1108 22.3786 24.9393 22.2071 24.7277 22.2071H20.8964C20.6848 22.2071 20.5132 22.3786 20.5132 22.5902V35.2336H19.747V27.9541C19.747 27.7425 19.5754 27.5709 19.3639 27.5709H15.5325C15.3209 27.5709 15.1494 27.7425 15.1494 27.9541V35.2336H14V35.9998H36.9879V35.2336H35.8385ZM18.9807 35.2336H15.9157V28.3372H18.9807V35.2336ZM24.3446 35.2336H21.2795V22.9734H24.3446V35.2336ZM29.7084 35.2336H26.6434V26.8047H29.7084V35.2336ZM35.0723 35.2336H32.0072V21.4408H35.0723V35.2336Z"
      fill="#66FE01"
    />
    <path
      d="M16.3917 23.4222C16.7051 23.6293 17.0725 23.7398 17.4482 23.7398C18.5062 23.7397 19.3638 22.882 19.3638 21.824C19.3638 21.4484 19.2534 21.0811 19.0463 20.7678L21.7581 18.0556C22.0689 18.2636 22.4343 18.3751 22.8082 18.3759C22.921 18.376 23.0336 18.3661 23.1446 18.3464C23.5091 18.2825 23.8471 18.1137 24.117 17.8606L26.3901 19.6081C26.0108 20.5957 26.5038 21.7039 27.4914 22.0833C28.479 22.4627 29.5872 21.9697 29.9666 20.982C30.1891 20.4028 30.1174 19.7517 29.774 19.2349L32.485 16.5239C33.3699 17.1096 34.5621 16.867 35.1477 15.9821C35.7334 15.0972 35.4909 13.9051 34.606 13.3194C33.7211 12.7337 32.5289 12.9762 31.9433 13.8611C31.5177 14.5041 31.5177 15.3392 31.9433 15.9821L29.2322 18.6932C28.4729 18.1912 27.4653 18.2929 26.8216 18.9364C26.8143 18.9437 26.8101 18.9521 26.8032 18.959L24.563 17.2372C24.9933 16.2707 24.5586 15.1384 23.592 14.7081C22.6255 14.2777 21.4931 14.7125 21.0628 15.679C20.7967 16.2768 20.8541 16.9692 21.2152 17.515L18.5045 20.226C17.6219 19.6426 16.4335 19.8851 15.85 20.7677C15.2666 21.6503 15.5091 22.8387 16.3917 23.4222ZM33.5398 13.7783C34.1746 13.7783 34.6892 14.2929 34.6892 14.9277C34.6892 15.5625 34.1746 16.0771 33.5398 16.0771C32.905 16.0771 32.3904 15.5625 32.3904 14.9277C32.3904 14.2929 32.905 13.7783 33.5398 13.7783ZM27.3628 19.4791C27.5784 19.2633 27.8709 19.1421 28.1759 19.1422C28.8107 19.1421 29.3254 19.6566 29.3255 20.2914C29.3255 20.5965 29.2043 20.889 28.9886 21.1046C28.5336 21.5382 27.8183 21.5382 27.3633 21.1046C26.9143 20.6558 26.9141 19.9281 27.3628 19.4791ZM21.8706 15.801C21.8707 15.801 21.8707 15.8009 21.8707 15.8009C22.045 15.5506 22.312 15.3804 22.6125 15.3281C22.6792 15.3167 22.7467 15.3109 22.8144 15.3109C23.0496 15.3111 23.279 15.3838 23.4714 15.5189C23.9914 15.8831 24.1177 16.5998 23.7536 17.1197C23.3894 17.6397 22.6727 17.766 22.1528 17.4019C21.6328 17.0377 21.5065 16.321 21.8706 15.801ZM16.6351 21.0116C16.6353 21.0114 16.6354 21.0113 16.6356 21.0111C17.0846 20.5623 17.8124 20.5625 18.2612 21.0115C18.71 21.4605 18.7099 22.1883 18.2609 22.6371C17.8059 23.0708 17.0906 23.0708 16.6356 22.6371C16.1866 22.1884 16.1864 21.4606 16.6351 21.0116Z"
      fill="#66FE01"
    />
  </svg>
);
