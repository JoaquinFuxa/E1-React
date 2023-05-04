import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  flex: 1;
`;

export const Button= styled.button`
  padding: 10px 20px;
  background-color: ${({ color }) => (color ? "green" : "crimson")};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;