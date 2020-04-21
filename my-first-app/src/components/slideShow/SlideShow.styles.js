import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 70%;
  margin: auto;
`;

export const h3 = styled.h3`
  text-align: center;
`;

export const EachSlideDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 300px;
`;

export const EachSlideSpan = styled.div`
  padding: 20px;
  font-size: 20px;
  background: #efefef;
  text-align: center;
`;

export const EachFade = styled.div`
  display: flex;
`;

export const BackgroundImage = styled.div`
  background-image: url(${(props) => props.url});
`;
