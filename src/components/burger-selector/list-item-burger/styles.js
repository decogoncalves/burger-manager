import styled from 'styled-components';

export const Item = styled.li`
  color: #4c4c4c;
  border: none;
  div {
    .item {
      padding: 1rem;
    }
    .float-right {
      i {
        color: #008c72;
      }
      :hover i {
        color: #005a5b;
      }
      :active i {
        color: #003840;
      }
      input {
        width: 2rem;
        text-align: center;
        margin: auto 0.5rem;
      }
    }
  }
  :not(:last-child) {
    div {
      .item {
        border-bottom: 1px solid #d3d3d3;
      }
    }
  }
`;
