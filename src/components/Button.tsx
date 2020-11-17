import styled from "styled-components";

export const Button = styled.button`
  ine-height: 1.5715;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  padding: 4px 15px;
  text-transform: uppercase;

  &:focus,
  &:hover {
    color: #40a9ff;
    background: #fff;
    border-color: #40a9ff;
    outline: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background: #1890ff;
  color: #fff;
  border-color: #1890ff;

  &:focus,
  &:hover {
    color: #fff;
    background: #40a9ff;
    border-color: #40a9ff;
  }
`;

export const DangerButton = styled(Button)`
  color: #fff;
  background: #ff4d4f;
  border-color: #ff4d4f;

  &:focus,
  &:hover {
    color: #fff;
    background: #ff7875;
    border-color: #ff7875;
  }
`;
