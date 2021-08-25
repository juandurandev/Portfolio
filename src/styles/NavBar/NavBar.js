import styled from 'styled-components';


export const NavBar = styled.div`
display:flex;
width:100%;
height:70px;
background-color:${props => props.dark ? "rgba(255,255,255,.96)" : "#191919"};
position:fixed;
justify-content:space-between;
align-items:center;
z-index:30;
box-shadow: ${props => props.down ? "0px 8px 16px -8px rgba(0,0,0,.30)" : "none"};
transition:.3s;

@media all and (max-width:2560px){
    height:120px;
    top:${props => props.down ? "0" : "-120px"};
}


@media all and (max-width:1440px){
    height:70px;
    top:${props => props.down ? "0" : "-70px"};
    
}


@media all and (max-width:768px){
    display:block;
    box-shadow:none;
    background-color:transparent;
}

@media all and (max-width:425px){
    top:${props => props.down ? "0" : "-70px"};
    background-color:${props => props.dark ? "rgba(255,255,255,.96)" : "black"};
    height:60px;
}

@media all and (max-width:375px){
    height:60px;
}


@media all and (max-width:320px){
    height:60px;
    background-color:${props => props.open ? "rgba(255,255,255,.96)" : ""}   
    }
`

export const NavImage = styled.img`
width:50px;
border:5px solid white;
background-color:white;
border-radius:50%;
margin-left:10px;
margin-top:10px;
`


export const NavIcon = styled.div`
`



export const NavText = styled.div`
display:flex;
height:100%;
align-items:center; 

& a{
    text-decoration:none;
    color:${props => props.dark ? "black" : "white"};
    font-size:12px;
    font-family:'Rubik Mono One';
    margin:0 10px;

    &:hover{
        transition:0.2s; 
    }

    @media all and (max-width:2560px){
        font-size:20px;
    }


    @media all and (max-width:1440px){
        font-size:12px;
    }

    @media all and (max-width:768px){
        color:white;
    }
}

@media all and (max-width:768px){
    display:flex;   
    position:relative;
    flex-direction:column;
    width:100vw;
    height:100vh;
    bottom:${props => props.open ? "-15vh" : "-110vh"};
    background-color:${props => props.dark ? "rgba(0,0,0,.98)" : "white"};
    transition:1s;
    border-radius:20px 20px 0px 0px;
    
    & a{
        margin:25px 0;
        font-size:15px;
        color:${props => props.dark ? "white" : "black"};
        transition:1s;
    }




}

`








