import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #202124;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  font-size: 24px;
  font-family: "Roboto";

  input {
    width: 100%;
    height: 75px;
    background-color: #202124;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 10px;

    font-size: 24px;
    font-family: "Roboto";

    &:hover{
      background-color: #303134;
      color: white;
    }
  }
`;
