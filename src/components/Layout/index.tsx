import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';

export class Layout extends React.Component {
  render = () => (
    <>
      <header className="header">
        <div className="wrapper">
          <h2 className="logotype">
            <Link to="/"> In recognition of codes</Link>
          </h2>

          <div className="navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/form">Form</NavLink>
            <NavLink to="/about">About us</NavLink>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
