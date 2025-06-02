import styled from "styled-components";

 export const Button = styled.button`
  background: ${(props) => (props.primary ? "rgb(77, 105, 32)" : "rgb(118, 175, 27)")};
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: rgb(25, 129, 39);
  }
`;