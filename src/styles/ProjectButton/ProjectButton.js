import styled from "styled-components";


export const ButtonContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
margin:10px 0;

`


export const Button = styled.button`
width:250px;
height:60px;
background-color:${props => props.dark ? "black" : "white"};
color:${props => props.dark ? "white" : "black"};
transition:1s;
border:none;
border-radius:5px;
cursor:pointer;
font-family:"Raleway";
font-weight:800;

&:hover{
    background-color:${props => props.dark ? "#191919" : "#c6c6c6"};
transition:1s;
}


@media all and (max-width:2560px){
    width:300px;
height:100px;
}

@media all and (max-width:1440px){
    width:250px;
height:60px;
}



`