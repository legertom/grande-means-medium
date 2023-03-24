import React from 'react'
import SidebarOption from '../SidebarOption/SidebarOptions'
import SidebarAccount from '../SidebarAccount/SidebarAccount'
import { Home ,Search ,NotificationsNone,MailOutline,BookmarkBorder,ListAlt,PermIdentity,MoreHoriz} from '@mui/icons-material';
import { AiFillHome , AiFillNotification } from 'react-icons/ai';
import {BiBell , IoBookmarksOutline,TbNotes,MdPostAdd,AiOutlineHome,RiPlayListAddLine
} from 'react-icons/all';
import './Sidebar.css'

const Sidebar = () => {


    return (
        <div >
           {/* <TwitterIcon className='sidebar__twitterIcon'/> */}
           {/* <img src={(require('../../assets/logo.png'))} style={{width:50,height:50,marginBottom:20}}   /> */}
           <div className='sidebar'>
           <SidebarOption text='Home' Icon={<AiOutlineHome size={25}/>} />
           <SidebarOption text='saved' Icon={<IoBookmarksOutline size={25}/>} />           
           <SidebarOption  text='published' Icon={<TbNotes size={25}/>} />
           <div className="sidebar-hr"><hr></hr></div>
           <SidebarOption text='Posts' Icon={<RiPlayListAddLine size={25}/>} />
           </div>
           {/* <SidebarOption text='List' Icon={ListAlt} />           
           <SidebarOption text='Profile' Icon={PermIdentity} />
           <SidebarOption text='More' Icon={MoreHoriz} /> */}

           {/* <button variant='outlined' className='sidebar__tweet'>
              <div dir="auto" className="css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-vw2c0b r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0"><svg viewBox="0 0 24 24" fill='#ffffff' className="r-jwli3a r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path></g></svg><span className="css-901oao css-16my406 css-bfa6kz r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0"></span></div>
              <span>Post</span>
           </button> */}

           <SidebarAccount />
           
        </div>
    )
}

export default Sidebar
