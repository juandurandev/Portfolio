import styled from 'styled-components';


export const Cardib = styled.div`
    width:100%;
    height:200px;
    background-color:black;
`

export const TextCardb = styled.p`
color:green;
z-index:40;
font-size:50px;

`



export const CardImage = styled.div`
    width: 100%;
    height: 70%;
    object-fit:cover;
    box-sizing:border-box;

    @media all and (max-width:2560px){
        width:100%;
    }

    @media all and (max-width:1440px){
        width:100%;
    }

    @media all and (max-width:1024px){
        width:100%;
    }

    @media all and (max-width:768px){
        height:70%;
    }

    @media all and (max-width:425px){
        height:70%;
        width:100%;
    }
`

export const Image = styled.img`
object-fit:cover;
background-size:auto;
width:100%;

`


export const TitleContainer = styled.div`
    height:30%;
    opacity:1;
    padding: 15px 15px 0;
    background-color:${props => props.dark ? "black" : "#161616"};
`

export const Title = styled.div`
        font-family:"Raleway";
        
        @media all and (max-width:2560px){
            font-size:40px;
            font-weight:800;
        }

        @media all and (max-width:1440px){
            font-size:20px;
           
        }
        

        @media all and (max-width:1024px){
            font-size:20px;
           
        }
        
        @media all and (max-width:768px){
            font-size:20px;
           
        }

        @media all and (max-width:425px){
            font-size:22px;
           
        }
        

        @media all and (max-width:375px){
            font-size:20px;
           
        }

        @media all and (max-width:320px){
            font-size:16px;
           
        }

`

export const SubTitle = styled.div`
        font-family:"Raleway";
        color:grey;

        @media all and (max-width:2560px){
            font-size:30px;
            font-weight:500;
            margin:10px 0;

        }

        @media all and (max-width:1440px){
            font-size:15px;
            font-weight:500;
            margin:10px 0;
        }

        @media all and (max-width:1024px){
            font-size:15px;
            font-weight:500;
            margin:10px 0;
        }

        @media all and (max-width:768px){
            font-size:16px;
            font-weight:500;
            margin:10px 0;
        }

        @media all and (max-width:425px){
            font-size:18px;
            font-weight:500;
            margin:10px 0;
        }

        @media all and (max-width:375px){
            font-size:17px;
            font-weight:500;
            margin:10px 0;
        }

        @media all and (max-width:320px){
            font-size:14px;
            font-weight:400;
            margin:5px 0;
        }
`


export const DescriptionContainer = styled.div`
    width: 100%;
    height:100%;
    position: relative;
    transition:1s; 
    color:white;
    background-color:${props => props.dark ? "black" : "#161616"};


    @media all and (max-width:2560px){
        width:auto;
    }

    @media all and (max-width:1440px){
        width:auto;
    }

    @media all and (max-width:1024px){
        width:auto;
    }


    @media all and (max-width:768px){
        width:auto;

    }
    
    @media all and (max-width:425px){
        width: auto;
    }
    
    @media all and (max-width:375px){

    }

    @media all and (max-width:320px){

    }
`



export const Description = styled.div`
    height: 70%;
    transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
    padding: 0 15px 15px 15px;
    opacity:1;
    background-color:${props => props.dark ? "black" : "#161616"};

    @media all and (max-width:2560px){
        padding: 10px 15px 30px 15px;
    }
    

    @media all and (max-width:1440px){
        padding: 10px 15px 30px 15px;
    }
    

    @media all and (max-width:1024px){
       
    }

    @media all and (max-width:768px){
      
    }

    @media all and (max-width:425px){
        padding: 0 15px 5px 15px;
    }

    @media all and (max-width:375px){

    }

    @media all and (max-width:320px){
        padding: 0 15px 5px 15px;
    }


`

export const DescriptionText = styled.div`
    font-family:"Raleway";
    width:100%;

    @media all and (max-width:2560px){
        font-size:20px;
    }
    
    
    @media all and (max-width:1440px){
        font-size:15px;
        
    }

    @media all and (max-width:1024px){
        font-size:15px;
        
    }

    @media all and (max-width:768px){
        font-size:15px;
        
    }

    @media all and (max-width:425px){
        font-size:19px;
      
    }

    @media all and (max-width:375px){
        font-weight:400;
        font-size:18px;
      
    }

    @media all and (max-width:320px){
        font-weight:400;
        font-size:15px;
    }




`

export const TechnologiesUsed = styled.div`
    font-family:"Raleway";
    color:grey;

    @media all and (max-width:2560px){
        margin:10px 0 15px 0;
        font-size:25px;
        font-weight:600;
    }


    @media all and (max-width:1440px){
        margin:5px 0 15px 0;
        font-size:15px;
        font-weight:600;
    }

    @media all and (max-width:1024px){
        margin:5px 0 15px 0;
        font-size:15px;
        font-weight:600;
    }


    @media all and (max-width:768px){
        margin:5px 0 15px 0;
        font-size:14px;
        font-weight:600;
    }
    
    @media all and (max-width:425px){
        margin:10px 0 25px 0;
        font-size:17px;
        font-weight:600;
    }

    @media all and (max-width:375px){
        margin:10px 0 20px 0;
        font-size:15px;
        font-weight:600;
    }

    @media all and (max-width:320px){
        margin:10px 0;
        font-size:14px;
        font-weight:600;
    }
    
`


export const ButtonsSection = styled.div`
    display:flex;
    width:100%;

    @media all and (max-width:2560px){
        height:50%;
    }


    @media all and (max-width:1440px){
        height:40%;
    }


    @media all and (max-width:425px){
        height:30%;
    }
   
    @media all and (max-width:320px){
        height:auto;
    }
`

export const ButtonsContainer = styled.div`
    height:auto;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    

@media all and (max-width:768px){
    display:block;
}

@media all and (max-width:425px){
    display:flex;
    
}

`

export const GoToDemo = styled.a`
background-color:#343434;
display:flex;
align-items:center;
justify-content:center;
font-family:"Raleway";
color:White;
text-decoration:none;
box-shadow: 0px 2px 2px 0px rgba(0,0,0,.3); 
transition:.5s;

&:hover{
    background-color:#222222;
    transition:.5s;
}

@media all and (max-width:2560px){
    width:50%;
    height:80px;
    font-size:15px;
    font-weight:600;
    border-radius:3px;
    margin:5px 5px ;
}

@media all and (max-width:1440px){
    width:45%;
    height:40px;
    font-size:15px;
    font-weight:600;
    border-radius:3px;
    margin:5px 0 ;
}

@media all and (max-width:1024px){
    width:45%;
    height:40px;
    font-size:15px;
    font-weight:600;
    border-radius:3px;
    margin:5px 0;
}


@media all and (max-width:768px){
    width:100%;
    height:40px;
    font-size:15px;
    font-weight:600;
    border-radius:3px;
    margin:5px 0;
}

@media all and (max-width:425px){
    width:170px;
    height:50px;
    font-size:17px;
    font-weight:600;
    border-radius:4px;
}

@media all and (max-width:375px){
    width:150px;
    height:50px;
    font-size:15px;
    font-weight:600;
    border-radius:3px;
}

@media all and (max-width:320px){
    width:115px;
    height:40px;
    font-size:13px;
    font-weight:600;
    border-radius:2px;
}
`

export const SeeCode = styled.a`
background-color:#343434;
display:flex;
align-items:center;
justify-content:center;
font-family:"Raleway";
color:White;
text-decoration:none;
box-shadow: 0px 2px 2px 0px rgba(0,0,0,.3); 
transition:.5s;

&:hover{
    background-color:#222222;
    transition:.5s;
}

@media all and (max-width:2560px){
    width:50%;
    height:80px;
    font-size:15px;
    font-weight:600;
    border-radius:3px;
    margin:5px 5px ;
}


@media all and (max-width:1440px){
    width:45%;
    height:40px;
    font-size:15px;
    font-weight:600;
    border-radius:3px;
    margin:5px 0;
}


@media all and (max-width:1024px){
    width:45%;
    height:40px;
    font-size:15px;
    font-weight:600;
    border-radius:3px;
    margin:5px 0;
}


@media all and (max-width:768px){
    width:100%;
    height:40px;
    font-size:15px;
    font-weight:600;
    border-radius:3px;
    margin:5px 0;
}

@media all and (max-width:425px){
    width:170px;
    height:50px;
    font-size:17px;
    font-weight:600;
    border-radius:4px;
    margin:0;
}



@media all and (max-width:375px){
    width:150px;
    height:50px;
    font-size:15px;
    font-weight:600;
    border-radius:3px;
}

@media all and (max-width:320px){
    width:115px;
    height:40px;
    font-size:13px;
    font-weight:600;
    border-radius:2px;
}


`



export const ContainerCard = styled.div`
overflow: hidden;
box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, .5);
border-radius:5px;
width:100%;
height:400px;


&:hover ${TitleContainer}{
    transform:translateY(1%);
    transition:1s;
}


 &:hover ${DescriptionContainer} {
    transform: translateY(-71%);
    transition:1s;
}

 &:hover ${Description}{
    opacity:100;
    transition:1s;
} 

@media all and (max-width:2560px){
    height:400px;
    width:100%;

    &:hover ${TitleContainer}{
        transform:translateY(0%);
        transition:1s;
    }
    
    
     &:hover ${DescriptionContainer} {
        transform: translateY(-70%);
        transition: 1s  ;
    }
    
     &:hover ${Description}{
        opacity: 100;
        transition:1s ;
    } 

}


@media all and (max-width:1440px){
    height:400px;
    width:100%;

    &:hover ${TitleContainer}{
        transform:translateY(0%);
        transition:1s;
    }
    
    
     &:hover ${DescriptionContainer} {
        transform: translateY(-70%);
        transition: 1s  ;
    }
    
     &:hover ${Description}{
        opacity: 100;
        transition:1s ;
    } 

}


@media all and (max-width:1024px){
    height:400px;
    width:100%;

    &:hover ${TitleContainer}{
        transform:translateY(0%);
        transition: 1s ;
    }
    
    
     &:hover ${DescriptionContainer} {
        transform: translateY(-70%);
        transition: 1s ;
    }
    
     &:hover ${Description}{
        opacity: 100;
        transition:1s;
    } 
}




@media all and (max-width:768px){
    height:400px;
    width:100%;
    

    &:hover ${TitleContainer}{
        transform:translateY(0%);
        transition: 1s ;
    }
    
    
     &:hover ${DescriptionContainer} {
        transform: translateY(-70%);
        transition: 1s ;
    }
    
     &:hover ${Description}{
        opacity: 100;
        transition:1s;
    } 
    
    
}

@media all and (max-width:425px){
    height:300px;
    width:100%;
    display:block;

    
    &:hover ${TitleContainer}{
        transform:translateY(0%);
        transition:1s;
    }


    &:hover ${DescriptionContainer} {
        transform: translateY(-70%);
        transition:1s;
    }

    &:hover ${Description}{
        opacity: 100;
        transition:1s;
    } 
}


@media all and (max-width:375px){
    height:300px;
    width:100%;
    display:block;
}


@media all and (max-width:320px){    
    height:300px;
    width:100%;
    display:block;
}

`




