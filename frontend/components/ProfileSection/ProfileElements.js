import styled from "styled-components";
// import image_header from "../../images/profile_banner.jpg";
// import profile from "../../images/profile.png";
import { Link as LinkR } from "react-router-dom";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ProfileBanner = styled.div`
  margin-top: 80px;
  object-fit: contain;
  height: 380px;
  width: 100%;
  z-index: -1;
`;
export const ProfileBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  align-content: space-between;
  width: 100%;
`;
export const ProfileHeaderContainer = styled.div`
  display: flex;
  ${'' /* background: url(${image_header}) center center/cover no-repeat; */}
  width: 100%;
  margin-top: 80px;
  height: 380px;
`;
export const ProfileName = styled.div`
  color: #fff;
  font-size: 2.2em;
`;
export const ProfileDesc = styled.div`
  color: #f49600;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: -10px;
  margin-bottom: 100px;
`;
export const ProfileSearchField = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProfileSearch = styled.input`
  width: 550px;
  background: rgba(255, 255, 255, 0.6);
  padding-left: 15px;
  padding-top: 2px;
  height: 35px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  border-width: 0px;
  width: 35vw;
  border: none;
  ::placeholder {
    color: #fff;
  }
`;
export const SearchButton = styled.div`
  cursor: pointer;
  background: #cd000e;
  padding: 7px 25px;
  color: #fff;
  font-size: 14px;
`;
export const ProfileBody = styled.div`
  display: flex;
  flex-direction: row;
  background: #141414;
`;
export const ProfileBodyLeft = styled.div`
  flex-grow: 0.1;
  margin-top: -250px;

  @media only screen and (max-width: 600px) {
    display: none;
    position: absolute;
  }
`;
export const ProfileBodyRight = styled.div`
  flex-grow: 10;
  margin-left: 100px;
  margin-top: 20px;
  @media (max-width: 320px) {
    padding: 20px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 25px;
    margin-right: 50px;
  }
`;
export const ProfilePicContainer = styled.div`
  display: flex;
  ${'' /* background: url(${profile}) center center/cover no-repeat; */}
  width: 100%;
  height: 450px;
  margin-left: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;
export const ProfileButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
`;
export const ProfilePic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: flex-end;
  margin-right: 30px;
  margin-bottom: 20px;
  margin-left: 5px;
`;
export const PicButtons = styled.div`
  background: ${(props) => (props.follow ? "#d10e21" : "#1c95cf")};
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 5px;
`;
export const PicText = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;
export const ProfileStatement = styled.div`
  margin-left: 40px;
  background: #1a1a1a;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProfilText1 = styled.div`
  color: #f49600;
  margin-left: 20px;
  font-weight: 500;
  font-size: 15px;
  padding-top: 10px;
  margin-left: -170px;
`;
export const ProfilText2 = styled.div`
  color: #fff;
  font-weight: 200;
  font-size: 12px;
  padding-top: 10px;
  width: 250px;
  word-wrap: break-word;
  text-align: justify;
`;
export const ProfilText3 = styled.div`
  color: #d30e1f;
  font-weight: 200;
  font-size: 12px;
  padding-top: 10px;
  width: 250px;
  margin-bottom: 20px;
`;
export const ProfileTabs = styled.div`
  margin-top: 20px;
  width: 100%;
  ${'' /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4); */}
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const Tab = styled(LinkR)`
  display: flex;
  flex-direction: row;
  height: 35px;
  padding: 5px 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  ${'' /* background: ${(props) => (props.active ? "#cd000e" : "transparent")}; */}
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: #cd000e;
  }
`;
export const TabImage = styled.div`
  margin-left: 30px;
  width: 15px;
`;
export const TabName = styled.div`
  color: #000;
  margin-left: 10px;
  font-size: 16px;
`;
export const ProfileGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #1a1a1a;
  width: 70%;
  margin-bottom: 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const ProfileGalleryTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const ProfileGalleryBottom = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const GalleryTitle = styled.div`
  color: #1fb5fc;
  margin-left: 15px;
  margin-top: 10px;
  font-size: 1.5vw;
  font-weight: 400;
  width: 250px;
  margin-right: 100px;
`;
export const GalleryRadio = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;
export const RdoText = styled.div`
  color: ${(props) => (props.paid ? "#930812" : "#1ea6e7")};
  margin-top: 10px;
  margin-left: 10px;
  font-size: 1vw;
`;
export const RadioButton = styled.input`
  color: #930812;
  background: #930812;
  margin-top: 12px;
  margin-right: 5px;
`;
export const SortingDropDown = styled.select`
  background: #141414;
  color: #fff;
  height: 35px;
  width: 180px;
  border-radius: 12px;
  border-color: #cd000e;
  font-size: 1.3vw;
  padding-left: 20px;
  line-height: 50px;
  margin-left: 20px;
  margin-top: 10px;
`;
export const ErrorText = styled.div`
  text-align: left;
  font-size: 0.8em;
  padding-top: 0px;
  font-weight: 200;
  flex-grow: 1;
  flex: 1;
  border: 0;
  color: red;
  padding-left: 20px;
  object-fit: contain;
  max-width: 486.45px;
  padding-right: 20px;
  word-wrap: break-word;
`;
