import styled from '@emotion/styled';

export const Button = styled.button`
  border: 1px solid #000;
  border-radius: 4px;
  hight: 50px;
  width: 100px;
  margin-left: 5px;
  text-transform: uppercase;
  padding-top: ${props => props.theme.spacing(3)};
  padding-bottom: ${props => props.theme.spacing(3)};
  &:hover {
    background-color: cyan;
  }
`;
