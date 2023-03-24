// import EventSummary from "../../EventSummary"
import React from 'react'
import { GalleryRadio, GalleryTitle, ProfileGalleryBottom, ProfileGalleryContainer, ProfileGalleryTop, RadioButton, RdoText, SortingDropDown } from "../ProfileElements"



const EventDisplayCard = ({ title, events, noEventMsg, isMyEvents }) => {
    return (
        <ProfileGalleryContainer id="cardcontainer">
            <ProfileGalleryTop>
                <GalleryTitle>{title}</GalleryTitle>
                <GalleryRadio>
                    <RadioButton type="radio" name="trending" checked />
                    <RdoText paid>Paid</RdoText>
                </GalleryRadio>
                <GalleryRadio>
                    <RadioButton type="radio" name="trending" />
                    <RdoText>Free</RdoText>
                </GalleryRadio>
                <SortingDropDown>
                    <option value="default">This month</option>
                </SortingDropDown>
            </ProfileGalleryTop>
            <ProfileGalleryBottom style={{ overflowX: "scroll" }}>
              {events?.map((event) => (
                    <h1 style={{color:'#fff'}}>{event.name}</h1>
                ))} 
            </ProfileGalleryBottom>
            {noEventMsg(events?.length)}
        </ProfileGalleryContainer>
    )
}

export default EventDisplayCard