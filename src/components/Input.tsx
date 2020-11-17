import styled from "styled-components";

const Input = styled.input.attrs(() => ({
  type: "text",
}))`
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  margin-right: 5px;
  margin-bottom: 10px;

  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
  &:focus {
    border-color: #40a9ff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export default Input;
