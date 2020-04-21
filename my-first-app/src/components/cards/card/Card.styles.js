import styled from 'styled-components';

export const Card = styled.div`
  width: 30%;
  margin: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
  margin-bottom: 24px;
  position: relative;
  cursor: pointer;
  max-width: 100%;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 16px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  transition: all 300ms ease-in-out 0s;
  &:hover {
    box-shadow: rgb(209, 209, 213) 0px 5px 15px;
    width: 32%;
    opacity: 0.9;
    top: 0px;
    left: 0px;
    transform: scale(1.02) translate(0px, -8px);
    transition: all 300ms ease-in-out 0s;
  }
`;

export const Image = styled.img`
  width: 90%;
  padding: 5%;
  margin: auto;
  border-radius: 15%;
  height: auto;
  flex-basis: 277px;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

export const Name = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  font-family: 'Open Sans', Tahoma, Geneva, sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0px;
  text-transform: none;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  width: auto;
  user-select: none;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  padding-top: 9px;
  padding-bottom: 9px;
  height: 42px;
  line-height: 22px;
  color: rgb(0, 106, 255);
  background-color: rgb(255, 255, 255);
  margin: 24px 0px 16px;
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-radius: 3px;
  transition: all 0.2s ease 0s;
  border-color: rgb(167, 166, 171);
  &:hover {
    background-color: rgb(0, 106, 255);
    color: rgb(255, 255, 255);
  }
`;
