import styled from "styled-components";

const Link = styled.a`
  display: block;
  padding: 5px 10px;
  text-decoration: none;

  &:focus,
  &:visited {
    color: #000000;
    outline: none;
  }

  &:hover {
    color: #0056b3;
  }
`;

export default Link;
