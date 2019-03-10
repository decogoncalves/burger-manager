import styled from 'styled-components';

export const Foot = styled.section`
  padding: 60px 0;
  background: #008c72 !important;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  ul.social {
    li {
      a {
        i {
          margin-right: 5px;
          font-size: 25px;
          -webkit-transition: 0.5s all ease;
          -moz-transition: 0.5s all ease;
          transition: 0.5s all ease;
        }
      }
    }
    li:hover {
      a {
        i {
          font-size: 30px;
          margin-top: -10px;
        }
      }
    }
  }
`;
