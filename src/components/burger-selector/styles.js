import styled from 'styled-components';

export const Select = styled.section`
  .collapse-header {
    border: 1px solid #d3d3d3;
    background: #008c72;
    color: #fff;
    padding: 1% 2%;
    h4 {
      font-weight: 400;
    }
    a {
      padding: 0.5rem 0 !important;
      :hover {
        text-decoration: none;
      }
      i {
        color: #fff;
      }
    }
    a[aria-expanded='true'] {
      i.fa-chevron-down {
        display: none;
      }
      i.fa-chevron-up {
        display: block;
      }
      i:hover {
        text-decoration: none;
      }
    }
    a[aria-expanded='false'] {
      i.fa-chevron-down {
        display: block;
      }
      i.fa-chevron-up {
        display: none;
      }
    }
  }
  .collapse,
  .collapsing {
    div {
      padding: 0;
      margin: 0 !important;
    }
  }
  .selector-body {
    border: 1px solid #d3d3d3;
    border-top: none;
  }
`;
