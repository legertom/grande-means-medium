import React from "react";
import Modal from "./../modal/modal";

import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignUp from "../sign_up_modal";
import Login from "../login_modal";
import { useRecoilState, useSetRecoilState } from "recoil";
// import LoginFormContainer from "./session_form/login_form_container";
import { signUpModal } from "../../util/modal_state/modalState";
import { loginModal } from "../../util/modal_state/loginModalState";
const SplashScreen = (props) => {
  const setOpen = useSetRecoilState(signUpModal);
  const [isLoginOpen, setLoginOpen] = useRecoilState(loginModal);
  function handleClickGit() {
    window.location.href = "https://github.com/legertom/";
  }
  function handleClickAbout() {
    window.location.href = "https://github.com/legertom/grande-means-medium";
  }
  return (
    <div>
      <header>
        <div
          className="g-w flex justify-b align-c"
          style={{ justifyContent: "flex-end" }}
        >
          {/* <svg viewBox="0 0 3940 610" className="logo">
            
            </svg> */}

          <ul className="flex align-c">
            <li className=" cursor-pointer"><Link onClick={handleClickGit}>Github</Link></li>
            <li className=" cursor-pointer"><Link onClick={handleClickAbout}>About</Link></li>
          
            {/* <Link to="/">Sign in</Link> */}
            <li>
              <Link onClick={() => setLoginOpen(true)}>Sign in</Link>
            </li>
            {/* <li>Sign in</li> */}
            <li>
              <button onClick={() => setOpen(true)}>Get started</button>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="container py-lg">
          <div className="g-w flex align-c">
            <div>
              <p className="intro-text">Stay Grande!</p>
              <p className="starter-text">
                Enjoy the most grande writing on the internet.
              </p>
              <button>Start reading</button>
            </div>
            <div className="letters"></div>
          </div>
        </div>
        <div className="trending">
          <div className="trending-header flex align-c g-w">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              className="ix y"
            >
              <path fill="#fff" d="M0 .8h28v28H0z"></path>
              <g opacity="0.8" clipPath="url(#trending_svg__clip0)">
                <path fill="#fff" d="M4 4.8h20v20H4z"></path>
                <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
                <path
                  d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
                  stroke="#000"
                  strokeLinecap="round"
                ></path>
              </g>
              <defs>
                <clipPath id="trending_svg__clip0">
                  <path
                    fill="#fff"
                    transform="translate(4 4.8)"
                    d="M0 0h20v20H0z"
                  ></path>
                </clipPath>
              </defs>
            </svg>
            <h6>Trending On Grande</h6>
          </div>
          <div className="g-w grid columns-3 trending-inner">
            <div>
              <div className="flex align-c">
                <img
                  className="trending-image"
                  src="https://miro.medium.com/fit/c/20/20/1*yAqDFIFA5F_NXalOJKz4TA.png"
                  width="20px"
                  height="20px"
                />
                <h5>
                  John Smith <span className="opacity-50">in</span> Towards AI
                </h5>
              </div>
              <h3 className="trending-text">Some random words...</h3>
              <div className="flex bottom-words">
                <span>August 11</span> &middot; <span>7 min read</span>
              </div>
            </div>
            <div>
              <div className="flex align-c">
                <img
                  className="trending-image"
                  src="https://miro.medium.com/fit/c/20/20/1*yAqDFIFA5F_NXalOJKz4TA.png"
                  width="20px"
                  height="20px"
                />
                <h5>
                  John Smith <span className="opacity-50">in</span> Towards AI
                </h5>
              </div>
              <h3 className="trending-text">Some random words...</h3>
              <div className="flex bottom-words">
                <span>August 11</span> &middot; <span>7 min read</span>
              </div>
            </div>
            <div>
              <div className="flex align-c">
                <img
                  className="trending-image"
                  src="https://miro.medium.com/fit/c/20/20/1*yAqDFIFA5F_NXalOJKz4TA.png"
                  width="20px"
                  height="20px"
                />
                <h5>
                  John Smith <span className="opacity-50">in</span> Towards AI
                </h5>
              </div>
              <h3 className="trending-text">Some random words...</h3>
              <div className="flex bottom-words">
                <span>August 11</span> &middot; <span>7 min read</span>
              </div>
            </div>
            <div>
              <div className="flex align-c">
                <img
                  className="trending-image"
                  src="https://miro.medium.com/fit/c/20/20/1*yAqDFIFA5F_NXalOJKz4TA.png"
                  width="20px"
                  height="20px"
                />
                <h5>
                  John Smith <span className="opacity-50">in</span> Towards AI
                </h5>
              </div>
              <h3 className="trending-text">Some random words...</h3>
              <div className="flex bottom-words">
                <span>August 11</span> &middot; <span>7 min read</span>
              </div>
            </div>
            <div>
              <div className="flex align-c">
                <img
                  className="trending-image"
                  src="https://miro.medium.com/fit/c/20/20/1*yAqDFIFA5F_NXalOJKz4TA.png"
                  width="20px"
                  height="20px"
                />
                <h5>
                  John Smith <span className="opacity-50">in</span> Towards AI
                </h5>
              </div>
              <h3 className="trending-text">Some random words...</h3>
              <div className="flex bottom-words">
                <span>August 11</span> &middot; <span>7 min read</span>
              </div>
            </div>
            <div>
              <div className="flex align-c">
                <img
                  className="trending-image"
                  src="https://miro.medium.com/fit/c/20/20/1*yAqDFIFA5F_NXalOJKz4TA.png"
                  width="20px"
                  height="20px"
                />
                <h5>
                  John Smith <span className="opacity-50">in</span> Towards AI
                </h5>
              </div>
              <h3 className="trending-text">Some random words...</h3>
              <div className="flex bottom-words">
                <span>August 11</span> &middot; <span>7 min read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="news"></div>
      </main>
      <SignUp />
      <Login />
      <footer className="footer-info"></footer>
      {/* <div className="modal active">
          <div className="modal-bg"></div>
          <div className="modal-content"></div>
        </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, null)(SplashScreen);
