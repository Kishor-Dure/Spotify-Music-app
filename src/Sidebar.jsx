import React from 'react';
import './sidebar.css';
import SidebarOption from './SidebarOption.jsx';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{playLists}, dispatch]= useDataLayerValue();
    return (
        <div className='sidebar'>
          <img 
          className="sidebar__logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify"
          />
          <SidebarOption Icon={HomeIcon} title='Home' />
          <SidebarOption Icon={SearchIcon} title='Search' />
          <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />
          
          <br />
          <strong className='sidebar__title'>PLAYLIST</strong>
          <hr/>
          {playLists?.items?.map(playlist =>(
            <SidebarOption title={playlist.name} /> 
          ))}
        </div>
    )
}

export default Sidebar;
