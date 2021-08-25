import styled from 'styled-components';


export const Container = styled.button`
display:inline-block;
cursor:pointer;
margin:10px;
background:transparent;
border:none;
outline:none;
padding:5px;
`



export const BarOne = styled.div`
width:35px;
height:5px;
background-color:#333;
margin:6px 0;
transition:.4s;
box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
transform: ${props => props.state ? "rotate(-45deg) translate(-9px, 6px)" : "0"};
`

export const BarTwo = styled.div`
width:35px;
height:5px;
background-color:#333;
margin:6px 0;
transition:.4s;
box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
opacity:${props => props.state ? "0" : "100"};
`

export const BarThree = styled.div`
width:35px;
height:5px;
background-color:#333;
margin:6px 0;
transition:.4s;
box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
transform: ${props => props.state ? "rotate(45deg) translate(-8px, -8px)" : "0"};
`