import styled from 'styled-components'


export const ContainerButton = styled.div`
display:flex;
width:100%;
height:100px;
align-items:center;
justify-content:center;

margin: 10px 0;
`



export const Button = styled.button`
width:150px;
height:50px;
border: ${props => props.theme.border};
border-radius:5px;
font-size:15px;
font-weight:600;
background-color:${props => props.theme.main};
color: ${props => props.theme.color};
font-family:'Raleway';
transition:0.5s;
box-shadow: 0 8px 16px -8px rgba(0,0,0,.50);
outline:none;
cursor:pointer;
z-index:50;

&:hover {
    color:${props => props.theme.hover.color};
    background-color:${props => props.theme.hover.main};
    border:${props => props.theme.hover.border};
    transition:${props => props.theme.hover.transition};    
}

@media all and (max-width:2560px){
    width:450px;
    height:110px;
    margin-top:-30px;
    font-size:25px;
}


@media all and (max-width:1440px){
    width:380px;
    height:65px;
    margin-top:-30px;
    font-size:20px;

}

@media all and (max-width:1024px){
    width:300px;
    height:55px;
    margin-top:-30px;

}

@media all and (max-width:768px){
    width:450px;
    height:60px;
    margin-top:-30px;
}

@media all and (max-width:425px){
    width:380px;
    height:60px;
    margin-top:-30px;
}

@media all and (max-width:375px){
    width:320px;
    height:60px;
}


@media all and (max-width:320px){
    width:280px;
    height:50px;
    margin:0;
}



`
Button.defaultProps = {
    theme:{
        main: "transparent",
        border: "2px solid black ",
        color:"black",
        hover:{
            main:"black",
            border:"2px solid black",
            color:"white",
            transition:"0.5s",
        }
    }
}

export const GreenTheme = {
    main:"mediumseagreen",
    border:"2px solid mediumseagreen",
    color:"white",
    hover:{
        main:"#399E66",
        color:"white",
        border:"2px solid #399E66",
        transition:"0.5s",
    }
}

export const SalmonTheme = {
    main:"transparent",
    border:"2px solid salmon",
    color:"salmon",
    hover:{
        main:"salmon",
        color:"white",
        border:"2px solid salmon",
        transition:"all ease-in-out 0.5s",
    }

}

export const PurpleTheme = {
    main:"transparent",
    border:"2px solid #262A45",
    color:"#262A45",
    hover:{
        main:"#262A45",
        color:"white",
        border:"2px solid #262A45",
        transition:"all ease-in-out 0.5s",
    }
    
}

export const BlackTheme = {
    main:"transparent",
    border:"2px solid black",
    color:"black",
    hover:{
        main:"black",
        color:"white",
        border:"2px solid black",
        transition:"all ease-in-out 0.5s",
    }

   
}

export const WhiteTheme = {
    main:"#191919",
    border:"2px solid black",
    color:"white",
    hover:{
        main:"black",
        color:"white",
        border:"2px solid #191919",
        transition:"all ease-in-out 0.5s",
    }
}