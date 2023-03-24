import React, { useEffect, useState } from "react";

import "./style.css";
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
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { signUpModal } from "../../util/modal_state/modalState";
import { useDispatch } from "react-redux";
import useLoginUserHooks from "../hooks/loginHook";
import useGetProfileHooks from "../hooks/getProfile";
import loginSchema from "../schema/loginSchema";
import {CgClose
} from 'react-icons/all';
import loginValidate from "../../util/validators/loginValidator";
import { createSetValue } from "../schema/fields";
import { loginModal } from "../../util/modal_state/loginModalState";
import { useStateValue } from "../../context/StateContextProvider.js";
import { actionTypes } from "../../context/StateReducers";

 var id = 0
const ProductDetailsPage = (props) => {
  const [isLoginOpen, setLoginOpen] = useRecoilState(loginModal);
  const [errors, setErrors] = useState({});
  const [errorsText, setErrorText] = useState({});
  const [values, setValues] = useRecoilState(loginSchema);
  const [loginForm, setLoginForm] = useState(false);
  const setValue = createSetValue(setValues)(setErrors)(errors);
  const { error, executeLoginUser } = useLoginUserHooks();
   const { ProfileData ,executeGetProfile  } = useGetProfileHooks({id:8});
 
  const [{ user }, dispatch] = useStateValue();
  //   const [values, setValues] = useRecoilState(productDetailsState);
  //   const { id, image, name, price, brand } = values;
  const removeItem = () => {
    // dispatch(removeProduct({ id: id }));
    // setOpen(false);
  };
  const handleClose = () => setOpen(false);
  const registerHooks = async (demo, userInfo = {}) => {
    var form_data = new FormData();
    if (demo == true) {
      
      form_data.append("user[email]", "demo@demo.com");
      form_data.append("user[password]", "123456");
    } else {
      form_data.append("user[email]", values.email);
      form_data.append("user[password]", values.password);
    }

    try {
      

      const registerResponse = await executeLoginUser({
        data: form_data,
      });

      if (registerResponse?.status === 422) {
        
      }
      if (
        registerResponse?.status === 200 ||
        registerResponse?.status === 201
      ) {
        
        const { data } = registerResponse;
      
        window.sessionStorage.setItem("id", data.id);
        window.sessionStorage.setItem("email", data.email);
        window.sessionStorage.setItem("username", data.username);
        window.sessionStorage.setItem("userData",JSON.stringify(data))
        setLoginOpen(false);
        
        dispatch({
          type: actionTypes.SET_USER,
          user: data,
        });
        setLoginOpen(false);
      } else {
        // setSubmitError(true);
        // setLoading(false);
      }
    } catch (e) {
      // setSubmitError(true);
      // setLoading(false);
    }
  };

  const validateForm = async () => {
    if (values.password.indexOf(" ") >= 0) {
      alert("password includes white space please remove space");
    } else {
      const validForm = await loginValidate
        .validate(values, {
          abortEarly: false,
          stripUnknown: true,
        })
        .catch(({ inner }) => {
          setErrors(
            inner.reduce((errors, { path, message }) => {
              return { ...errors, [path]: message };
            }, {})
          );

          return false;
        });

      return validForm;
    }
  };
  const handleSubmit = async () => {
    try {
      const isFormValid = await validateForm();
      if (isFormValid) {
        // setLoading(true);

        registerHooks(false);
      }
    } catch (e) {
      // setSubmitError(true);
      // setLoading(false);
    }
  };
  const handleDemoSubmit = async () => {
    try {
      // const isFormValid = await validateForm();
      // if (isFormValid) {
      // setLoading(true);
      // setValue("email", 'demo@demo.com')
      // setValue("password", '123456')
      registerHooks(true);
      // }
    } catch (e) {
      // setSubmitError(true);
      // setLoading(false);
    }
  };
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth
      maxWidth="md"
      // style={{height:200}}
      open={isLoginOpen}
    >
      <DialogContent classes={{ root: "SignUp_dialogContentRoot" }}>
        {/* <div className="productDescriptionContainer"> */}
        <div className="modal">
          <div className="welcome-back">Welcome back</div>
          <div className="signInButtons">
            {!loginForm ? (
              <>
                <button>
                  <svg width="25" height="25" class="nk gz y">
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z"
                        fill="#EA4335"
                      ></path>
                    </g>
                  </svg>
                  Continue with Google
                </button>
                <button onClick={() => setLoginForm(true)}>
                  <svg width="25" height="25" class="nk gz y">
                    <path d="M4 6v13h17V6H4zm5.9 7.97l2.6 2.12 2.6-2.12 4.14 4.02H5.76l4.15-4.02zm-4.88 3.32V9.97l4.1 3.35-4.1 3.97zm10.87-3.97l4.1-3.35v7.32l-4.1-3.97zm4.1-6.3v1.64l-7.49 6.12-7.48-6.13V7.01h14.96z"></path>
                  </svg>
                  Continue with email
                </button>
              </>
            ) : (
              <Box className="SignUp_rightSection">
                <Box pb={3}></Box>
                <Box className="SignUp_inputFields">
                  <Box className="SignUp_inputSections">
                    <TextField
                      className="SignUp_input"
                      id="email"
                      onChange={({ target }) => setValue("email", target.value)}
                      placeholder={"Enter your email"}
                      value={values.email}
                    
                      InputProps={{
                        classes: {
                          input: "SignUp_inputStyle",
                        },
                        form: {
      autocomplete: 'off',
    },
                        startAdornment: (
                          <InputAdornment position="start">
                            {/* <img alt="user" src={emailIcon} /> */}
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />

                    {errors.email && (
                      <Box color="#ff0000">
                        <Typography style={{ color: "red" }} variant="body2">
                          {errors.email}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
                <Box className="SignUp_inputSections" width="100%" pb={2}>
                  <TextField
                    className="SignUp_input"
                    id="email"
                    type="password"
                  
                    onChange={({ target }) =>
                      setValue("password", target.value)
                    }
                    autoComplete="new-password"
                    placeholder={"Enter your password"}
                    value={values.password}
                    InputProps={{
                      classes: {
                        input: "SignUp_inputStyle",
                      },
                      form: {
      autocomplete: 'off',
    },
                      startAdornment: (
                        <InputAdornment position="start">
                          {/* <img alt="user" src={emailIcon} /> */}
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />

                  {errors.password && (
                    <Box color="#ff0000">
                      <Typography style={{ color: "red" }} variant="body2">
                        {errors.Password}
                      </Typography>
                    </Box>
                  )}
                </Box>
                {error?.response && (
                  <Box color="#ff0000">
                    <Typography style={{ color: "red" }} variant="body2">
                      {error?.response?.data[0]}
                    </Typography>
                  </Box>
                )}
                <Box py={2} width="100%">
                  <Button
                    className="SignUp_button"
                    component="label"
                    // disabled={isLoading}
                    onClick={() => handleSubmit()}
                    variant="contained"
                  >
                    <Typography> Sign In</Typography>
                    {/* {isLoading && <CircularProgress style={{ height: 24, width: 24 }} />}
								{!isLoading && (
									<Typography variant="body1"><strong>{t.create}</strong></Typography>
								)} */}
                  </Button>
                </Box>
                <Box py={2} width="100%">
                  <Button
                    className="SignUp_button"
                    component="label"
                    // disabled={isLoading}
                    onClick={() => handleDemoSubmit()}
                    variant="contained"
                  >
                    <Typography>Demo User Log In</Typography>
                    {/* {isLoading && <CircularProgress style={{ height: 24, width: 24 }} />}
								{!isLoading && (
									<Typography variant="body1"><strong>{t.create}</strong></Typography>
								)} */}
                  </Button>
                </Box>
                <Box
                  alignItems="center"
                  display="flex"
                  justifyContent="space-between"
                  width="100%"
                >
                  {/* <Divider className="SignUp_dividerOr" />
                  <Typography style={{ color: "#000" }} variant="body1">
                    Or
                  </Typography>
                  <Divider className="SignUp_dividerOr" /> */}
                </Box>

                <Box py={2} width="100%">
                  {/* <Button
								component="label"
								onClick={signIn}
								variant="contained"
								style={{
									backgroundColor: '#ffffff',
									width: '100%',
								}}
							>
								<img alt="google" src={googleIcon} />
							</Button> */}
                </Box>

                <Box pb={2} width="100%">
                  {/* <FacebookLogin
								appId="481594196995512"
								autoLoad={false}
								fields="first_name,last_name,email"
								scope="public_profile,email"
								callback={responseFacebook}
								textButton={
									<Typography variant="body1">{t.facebook}</Typography>
								}
								buttonStyle={{
									borderRadius: 4,
									padding: 4,
									width: '100%',
								}}
							/> */}
                </Box>
              </Box>
            )}
          </div>

          <div className="modal-footer">
            <span>
              Click “Sign Up” to agree to Grande's Terms of Service and
              acknowledge that Grande's Privacy Policy applies to you.
            </span>
          </div>
          <Box className="SignUp_closeSection">
          <CgClose    onClick={() => setLoginOpen()} size={25}/>
            {/* <img
              alt="Close"
              onClick={() => setLoginOpen()}
              src={close}
              tag="#"
              height={24}
              width={24}
              style={{ cursor: "pointer" }}
            /> */}
          </Box>
        </div>

        {/* </div> */}
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsPage;
