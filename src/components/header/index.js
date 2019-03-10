import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Head } from './styles';

const Header = () => (
  <Head>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12">
        <Navbar>
          <Navbar.Brand href="#">
            <h2>
              <i className="fas fa-hamburger" />
              <span> Burger Manager</span>
            </h2>
          </Navbar.Brand>
        </Navbar>
      </div>
    </div>
  </Head>
);

export default Header;
