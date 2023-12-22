import styled from 'styled-components';
import backgroundImage from '../../img/cafe.png';

const gradientColorStart = 'rgb(209, 230, 208)';
const gradientColorEnd = 'rgb(100, 120, 100)'; 

export const AppContainer = styled.div`
position: relative;
height: 350px;
width: 300px;
padding: 10px;
margin: 25px;
border-radius: 10px;
box-shadow: 0 0 6px black;
overflow: hidden;

&::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom right, ${gradientColorStart}, ${gradientColorEnd});
  z-index: -1; 
}

background: url(${backgroundImage}) no-repeat right bottom;
background-size: 75px 75px;
background-position: calc(100% - 25px) calc(100% - 15px), right bottom;
`;
