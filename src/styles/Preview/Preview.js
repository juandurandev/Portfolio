import styled from 'styled-components';


export const Section = styled.div`
width:100%;
height:auto;
background-color:${props => props.dark ? "white" : "black"};
transition:1s;


@media all and (max-width:2560px){
    height:auto;
}


@media all and (max-width:1440px){
    height:auto;
    
    
}

@media all and (max-width:1024px){
    height:auto;
}

@media all and (max-width:768px){
    height:auto;
    padding:0;
}

`

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
padding:10px;
`

export const ContainerGrid = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
grid-template-rows:repeat(3,1fr);
grid-template-areas:"card";
grid-gap: 20px;
width:90%;
height:auto;

@media all and (max-width:2560px){
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(2,1fr);
    height:auto;
}

@media all and (max-width:1440px){
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(2,250px);
    height:auto;
    
}

@media all and (max-width:1024px){
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(2,250px);
    height:auto;
}


@media all and (max-width:768px){
    grid-template-columns:repeat(2,1fr);
    grid-template-rows:repeat(1,1fr);
    width:100%;
    height:auto;
}

@media all and (max-width:425px){
    grid-template-columns:repeat(1,1fr);
    width:100%;
    height:auto;
}
`


export const PreviewTitle = styled.div`
display:flex;
justify-content:center;
color:${props => props.dark ? "black" : "white"};

& h2{
    font-size:50px;
    font-family:'Raleway';
    font-weight:900;
    margin:35px 0;

    @media all and (max-width:2560px){
        font-size:80px;
    }

    @media all and (max-width:1440px){
        font-size:50px;
    }

    @media all and (max-width:425px){
        font-size:40px;
    }


    @media all and (max-width:375px){
        font-size:35px;
        margin-bottom:0;
    }

    @media all and (max-width:320px){
        font-size:35px;
        
    }

    
    
}
    

`

export const PreviewCardContainer = styled.div`
width:230px;
height:250px;
border-radius:0px;
justify-self:center;
transition:0.8s;
border:2px solid transparent;
padding:10px;
margin:10px 0;
border-radius:5px;
box-shadow: 0 0px 2px 0px rgba(0,0,0,.35);
background-color:${props => props.dark ? "white" : "#161616"};


@media all and (max-width:2560px){
    width:100%;
    height:auto;
    margin:5px 5px;
    transition:.8s;
    box-shadow: 0 0px 2px 0px rgb(0 0 0 / 35%);
    border-radius:10px;
    padding:50px 0;
}



@media all and (max-width:1440px){
    width:100%;
    height:auto;
    margin:5px 5px;
    transition:.8s;
   
    border-radius:5px;
    padding:0;
    
}

@media all and (max-width:1024px){
    width:100%;
    

}

@media all and (max-width:768px){
    width:100%;
    box-shadow: 0 0px 2px 0px rgb(0 0 0 / 35%);
    
    border-radius:5px;
    color:black;
    height:100%;

   
}

@media all and (max-width:425px){
    margin:5px 0;
    width:100%;
    border-radius:5px;
    background-color:${props => props.dark ? "white" : "#161616"};
}
`

export const ImageCard = styled.img`
display:flex;
margin:10px auto;
padding:10px;



@media all and (max-width:2560px){
    width:200px;
    
    margin:10px auto;
}

@media all and (max-width:1440px){
    width:120px;
    margin:10px auto;
}

@media all and (max-width:768px){
   width:150px;
   margin:10px auto;
}

@media all and (max-width:320px){
    margin:10px auto;
    width:100px;
}
`

export const TitleCard = styled.div`
color:${props => props.dark ? "black" : "white" };
font-weight:600;
font-size:16px;
font-family:raleway;
text-align:center;
margin:10px;

@media all and (max-width:2560px){
    font-size:22px;
}

@media all and (max-width:1440px){
    font-size:16px;
}

@media all and (max-width:768px){
    margin:0;
}

`

export const DescriptionCard = styled.div`
color:grey;
font-size:15px;
font-family:raleway;
margin:5px;
text-align:center;
font-weight:600;

@media all and (max-width:2560px){
    font-size:30px;
}

@media all and (max-width:1440px){
    font-size:15px;
}


@media all and (max-width:1024px){
    font-size:12px;

}

@media all and (max-width:768px){
    text-align:center;
    font-size:15px;
    
}


@media all and (max-width:425px){
    text-align:center;
    font-size:15px;
}
`





