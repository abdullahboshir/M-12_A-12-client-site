import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const NavBar = () => {
  const [showMenu, setShowMenu] = useState();

  const [user] = useAuthState(auth);

  return (
    <nav>
      <div className="nav-container" >

        <div className="nav-brand">
          <img src='https://i.ibb.co/TkgS9zP/imajjjjjges-1.png' alt="" />
        </div>

        <div className="nav-items">
          <ul className={showMenu ? '' : 'header-container'}>
            <li className='liItem'>
              <NavLink className={({ isActive }) => isActive ? "active-nav" : 'nav-item'} to="/">Home</NavLink>
            </li>
            <li className='liItem '>
              <NavLink className={({ isActive }) => isActive ? "active-nav" : 'nav-item'} to="/blogs">Blogs</NavLink>
            </li>
            <li className='liItem'>
              <NavLink className={({ isActive }) => isActive ? "active-nav" : 'nav-item'} to="/aboutMe">About Me</NavLink>
            </li>

            {
              user ?
                <>
                  <li className='liItem'><NavLink className={({ isActive }) => isActive ? "active-nav" : 'nav-item'} to="/dashBoard">Dashboard</NavLink></li>
                </>
                : <></>
            }

          </ul>
        </div>

        
        <div className='nav-signOut'>
          <ul>
            {
              user ? <li className='liItem'>
                <button className={({ isActive }) => isActive ? "active-nav" : 'nav-item'} onClick={() => { signOut(auth); localStorage.removeItem('accessToken')}}>SignOut</button>
              </li> :
                <li className='liItem'>
                  <NavLink className={({ isActive }) => isActive ? "active-nav" : 'nav-item'} to="/login">Login</NavLink>
                </li>
            }
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;