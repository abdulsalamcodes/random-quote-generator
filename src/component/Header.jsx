import React from 'react'
import Fab from '@material-ui/core/Fab';
import CachedIcon from '@material-ui/icons/Cached';

function Header({onClick}) {
    return (
        <header>
          <nav className="nav">
              <div></div>
            <Fab onClick={onClick}  className="icon-container">
              <span>Random</span>  <CachedIcon />
            </Fab>
              
            </nav>  
        </header>
    )
}

export default Header
