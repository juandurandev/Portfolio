import styled from 'styled-components';



export const Container = styled.div`
width:100%;
display:flex;
background-color:${props => props.dark ? "white" : "black"};
transition:1s;


@media all and (min-width:1025px){
    width:100%;
}

@media all and (max-width:1024){
    width:100%;
}


`

export const Section = styled.div`
width:100%;
height:450px;



@media all and (min-width:1025px){
    width:70%;
    height:auto;
}

@media all and (max-width:1024px){
    
    height:auto;
}
`
export const DesktopSection = styled.div`
width:30%;



`


export const Presentation = styled.div`
margin:110px 120px;

@media all and (max-width:2560px){
    margin:160px 70px 50px 70px;
}

@media all and (max-width:1440px){
    margin:110px 70px 50px 70px;
}

@media all and (max-width:1300px){
    margin:110px 20px 50px 70px;
}

@media all and (max-width:1024px){
    margin:20px 70px 50px 70px;
    text-align:center;
}


@media all and (max-width:768px){
    margin: 0px 20px 50px 20px;
    text-align:center;
}


@media all and (max-width:425px){
    margin:0px 20px 50px 20px;
}

@media all and (max-width:375px){
    margin: 0px 20px 50px 20px;
    text-align:center;
}


@media all and (max-width:320px){
    margin:0px 20px 50px 20px;
    text-align:center;
}

`

export const MyNameIs = styled.div`
color:${props => props.dark ? "black" : "white"};
        font-size:18px;
        font-family:'Raleway';
        margin-left:10px;
        font-weight:500;

        @media all and (max-width:2560px){
            font-size:30px;
        }

        @media all and (max-width:1440px){
            font-size:18px;
        }


        @media all and (max-width:1024px){
            margin-left:0;
            text-align:center;
        }

        @media all and (max-width:320px){
            text-align:center;
        }
`

export const MyNamePresentation = styled.h2`
        color:${props => props.dark ? "black" : "white"};
        font-family:'Raleway';

        @media all and (max-width:2560px){
            font-size:110px;
        }

        @media all and (max-width:1440px){
            font-size:80px;
        }


        @media all and (max-width:1024px){
            font-size:75px;
            text-align:center;
        }

        @media all and (max-width:768px){
            font-size:70px;
        }

        @media all and (max-width:425px){
            font-size:60px;
        }

        @media all and (max-width:375px){
            font-size:55px;
        }


        @media all and (max-width:320px){
            font-size:45px;
        }


`

export const SubtitlePresentation = styled.h3`
        color:${props => props.dark ? "black" : "white"};
        font-family:'Raleway';
        margin:10px 0;

        @media all and (max-width:2560px){
            font-size:90px;
        }

        @media all and (max-width:1440px){
            font-size:60px;
        }


        @media all and (max-width:1024px){
            font-size:50px;
            text-align:center;
        }

        @media all and (max-width:768px){
            font-size:45px;
            font-weight:800;

            
        }

        @media all and (max-width:425px){
            font-size:55px;
            text-align:left;
            font-weight:800;
        }

        @media all and (max-width:375px){
            font-size:45px;
            
        }

        @media all and (max-width:320px){
            font-size:40px;
           
        }
`

export const ParagraphPresentation = styled.p`

    width:500px;
    color:#868686;
    font-family:'Raleway';
    margin:10px 0;
    font-weight:600;

    @media all and (max-width:2560px){
        font-size:25px;
        width:50%;
    }

    @media all and (max-width:1440px){
        font-size:18px;
        width:70%;
    }

    @media all and (max-width:1024px){
        width:100%;
        text-align:center;
    }

    @media all and (max-width:768px){
        margin:10px 0;
        text-align:center;
        font-weight:500;
        
    }

    @media all and (max-width:425px){
        width:100%;
        text-align:left;
        font-weight:500;
    }

    @media all and (max-width:375px){
        width:100%;
      

    }

    @media all and (max-width:320px){
        width:100%;
       
    }


`


export const ButtonContainer = styled.div`
display:flex;
justify-content:center;
`