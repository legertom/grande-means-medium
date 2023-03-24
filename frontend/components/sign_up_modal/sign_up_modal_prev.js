import React, { useEffect,useState } from "react";

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
import useRegisterUserHooks from "../hooks/signUpHook";
import signUpSchema from "../schema/signUpSchema";
import signUpValidate from "../../util/validators/signUpValidator";
import { createSetValue } from "../schema/fields";
import { loginModal } from "../../util/modal_state/loginModalState";
import useLoginUserHooks from "../hooks/loginHook"
import { useStateValue } from "../../context/StateContextProvider.js";
import { actionTypes } from "../../context/StateReducers";
const ProductDetailsPage = (props) => {
  const [isOpen, setOpen] = useRecoilState(signUpModal);
  const [isLoginOpen, setLoginOpen] = useRecoilState(loginModal);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useRecoilState(signUpSchema);
  const setValue = createSetValue(setValues)(setErrors)(errors);
  const {error, executeRegisterUser } = useRegisterUserHooks();
  const {  executeLoginUser } = useLoginUserHooks();
  //   const [values, setValues] = useRecoilState(productDetailsState);
  const [{ user }, dispatch] = useStateValue();
  //   const { id, image, name, price, brand } = values;
  const removeItem = () => {
    // dispatch(removeProduct({ id: id }));
    // setOpen(false);
  };
  const handleClose = () => setOpen(false);
  const registerHooks = async (userInfo = {}) => {
	var form_data = new FormData();
   var login_FormData = new FormData()
    form_data.append("user[username]", values.username);
	form_data.append("user[email]", values.email);
	form_data.append("user[password]", values.password);
  login_FormData.append("user[email]", values.email);
  login_FormData.append("user[password]", values.password);
	try {
		

		const registerResponse = await executeRegisterUser({
			data: form_data,
		});
		if (registerResponse?.status === 200 || registerResponse?.status === 201 ) {
      const registerResponse = await executeLoginUser({
        data: login_FormData,
      });
			const {
				data
			  } = registerResponse;
        window.sessionStorage.setItem("id", data.id);
			window.sessionStorage.setItem('email', data.email);
			window.sessionStorage.setItem('password', data.password);
      window.sessionStorage.setItem('username', values.username);
			

           setOpen(false)
           dispatch({
            type: actionTypes.SET_USER,
            user: data,
          });
			
		} else {
			// setSubmitError(true);
			// setLoading(false);
		}
	} catch (e) {
		// setSubmitError(true);
		// setLoading(false);
	}

}

  const validateForm = async () => {

	if (values.password.indexOf(' ') >= 0) {
		alert("Password has white space. Please remove all spaces.");
	}
	else {
		const validForm = await signUpValidate
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

			registerHooks();
		}
	} catch (e) {
		// setSubmitError(true);
		// setLoading(false);
	}
};
const goLogin = () => {
	setOpen(false)
	setLoginOpen(true)
}
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth
      maxWidth="md"
      open={isOpen}
    >
      <DialogContent classes={{ root: "SignUp_dialogContentRoot" }}>
        {/* <div className="productDescriptionContainer"> */}
        <Box className="SignUp_container">
          {/* <Box className="SignUp_leftSection"> */}
            {/* <Box color="#ffffff">
              <Typography variant="h3">
                <strong>{"Grande Medium"}</strong>
              </Typography>
            </Box> */}
            {/* <Divider className="SignUp_divider" />
            <Box color="#f49600" py={2}> */}
              {/* <Typography variant="h4" ><strong>{t.setup}</strong></Typography> */}
            {/* </Box>
            <Box color="#ffffff"> */}
              {/* <Typography variant="body1"><strong>{t.description}</strong></Typography> */}
            {/* </Box>
          </Box> */}

          <Box className="SignUp_rightSection">
            <Box pb={3}>
              <Typography style={{ fontWeight: "bold" }} variant="h3">
                <strong>{"Create Account"}</strong>
              </Typography>
            </Box>

            <Box className="SignUp_inputFields">
              <Box className="SignUp_inputSections">
                <TextField
                  className="SignUp_input"
                  id="firstName"
                  onChange={({ target }) => setValue('username', target.value)}
                  placeholder={"Enter username"}
                  autoFocus={true}
                  value={values.username}
                  InputProps={{
                    classes: {
                      input: "SignUp_inputStyle",
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        {/* <img alt="user" src={userIcon} /> */}
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />

                {errors.username && (
									<Box color="#ff0000">
										<Typography style={{ color: 'red' }} variant="body2">
											{errors.username}
										</Typography>
									</Box>
								)}
              </Box>

              <Box className="SignUp_inputSections">
                <TextField
                  className="SignUp_input"
                  id="lastName"
                  onChange={({ target }) => setValue('email', target.value)}
                  placeholder={"Enter your email"}
                  value={values.email}
                  InputProps={{
                    classes: {
                      input: "SignUp_inputStyle",
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        {/* <img alt="user" src={userIcon} /> */}
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />

                {errors.email && (
									<Box color="#ff0000">
										<Typography style={{ color: 'red' }} variant="body2">
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
                onChange={({ target }) => setValue('password', target.value)}
                placeholder={"Enter your password"}
                value={values.password}
                InputProps={{
                  classes: {
                    input: "SignUp_inputStyle",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <img alt="user" src={emailIcon} /> */}
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />

              {errors.password && (
								<Box color="#ff0000">
									<Typography style={{ color: 'red' }} variant="body2">
										{errors.Password}
									</Typography>
								</Box>
							)}
            </Box>

            

            {/* {hasSubmitError && (
							<Box color="#ff0000">
								<Typography style={{ color: 'red' }} variant="body2">
									{t.something}
								</Typography>
							</Box>
						)} */}

            <Box py={2} width="100%">
              <Button
                className="SignUp_button"
                component="label"
                // disabled={isLoading}
                onClick={()=>handleSubmit()}
                variant="contained"
              >
                <Typography> Sign Up</Typography>
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
              <Divider className="SignUp_dividerOr" />
              <Typography style={{ color: "#000" }} variant="body1">
                Or
              </Typography>
              <Divider className="SignUp_dividerOr" />
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

            <Box py={2} >
              <Typography style={{ color: "#000" }} variant="body2">
                {"Already have an account?  "}
                <Link
                  onClick={()=>goLogin()}
                  style={{ color: "#1fb5fc", cursor: "pointer" }}
                >
                  {"Login"}
                </Link>
              </Typography>
            </Box>

            <Box className="SignUp_footer">
              {/* <Typography style={{ color: '#000' }} variant="caption">
								{t.proceeding}
								<Link
									onClick={() => setOpenPrivacy(true)}
									style={{ color: '#000', cursor: 'pointer' }}
								>
									{t.terms}
								</Link>
							</Typography> */}
            </Box>
          </Box>

          <Box className="SignUp_closeSection">
            {/* <img
							alt="Close"
							onClick={handleClose}
							src={close}
							tag='#'
							height={24}
							width={24}
							style={{ cursor: 'pointer' }}
						/> */}
          </Box>
        </Box>

        {/* </div> */}
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsPage;
