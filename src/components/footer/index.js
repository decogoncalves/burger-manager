/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Foot } from './styles';

const Footer = () => (
  <Foot>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12">
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p>
            <u>ACG Production</u>
            <span> - App Developed to Dextra Challenge</span>
          </p>
          <p className="h6">&copy; All right Reversed. André Gonçalves</p>
        </div>
        <hr />
      </div>
    </div>
  </Foot>
);

export default Footer;
