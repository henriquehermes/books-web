import styled, { css } from 'styled-components';

const secondaryBtn = css`
  background-color: #fdaa84;
  border-color: #fdaa84;
  color: #fff;
`;

const CustomButton = styled.button`
  cursor: pointer;
  width: 130px;
  height: 40px;
  background-color: #231f26;
  border-color: #231f26;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 20px;
  transition: transform 0.2s ease-in;
  ${props => props.secondary && secondaryBtn}

  &:hover {
    transform: scale(1.1);
    ${props =>
      props.secondary
        ? `box-shadow: 0px 0px 10px 0px rgba(253,170,132, 0.5);`
        : `box-shadow: 0px 0px 10px 0px rgba(35,31,38, 0.5);`}
  }
`;

export default CustomButton;
