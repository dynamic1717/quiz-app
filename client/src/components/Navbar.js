import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav
      className='navbar navbar-light'
      style={{ backgroundColor: 'var(--main-green)', height: '75px' }}
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          Quiz App
        </a>
        <ul
          className='navbar-nav me-auto mb-2 mb-lg-0'
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '300px',
          }}
        >
          <li className='nav-item'>
            <NavLink to='/create' className='nav-link'>
              Create a quiz
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/random' className='nav-link'>
              Random quiz
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
