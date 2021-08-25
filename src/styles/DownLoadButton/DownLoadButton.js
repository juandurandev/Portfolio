import styled from 'styled-components';
import Link from 'next/link'


export const ResumeButtonContainer = styled(Link)`
display:flex;
`

export const ResumeButton = styled.a`
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
margin:10px 0 15px 0;
background-color:${props => props.dark ? "black" : "mediumseagreen"};
border:transparent;
border-radius:5px;
outline:none;
font-family:"Raleway";
font-weight:800;
color:${props => props.dark ? "white" : "white"};
transition:1s;
box-shadow: 0 8px 16px -8px rgba(0,0,0,.50);
cursor:pointer;



&:hover{
background-color:${props => props.dark ? "#161616" : "#399E66"};
color:White;
transition:1s;
}

@media all and (max-width:2560px){
width:75%;
height:90px;
font-size:25px;

}

@media all and (max-width:1440px){
width:70%;
height:50px;
font-size:15px;
}


@media all and (max-width:1024px){
    width:60%;
    height:50px;
    font-size:15px;
}


`