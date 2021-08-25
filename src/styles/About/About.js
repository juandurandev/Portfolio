import styled, { keyframes,css } from 'styled-components';



export const Section = styled.div`
width:100%;
height:700px;
background-color:${props => props.dark ? "white" : "black"};
transition:1s;

@media all and (max-width:2560px){
  height:auto;
}


@media all and (max-width:1440px){
  height:auto;
}

@media all and (max-width:768px){
  height:auto;
}

@media all and (max-width:425px){
  height:auto;
}


`

export const AboutGrid = styled.div`
width:100%;
height:100%;
display:grid;
grid-template-columns:repeat(2,1fr);
grid-template-rows:1fr;
grid-template-areas:"slideshow text";

@media all and (max-width:2560px){
  grid-template-columns:repeat(2,1fr);
  grid-template-rows:1fr;
  grid-template-areas:"slideshow text";
}


@media all and (max-width:1024px){
  grid-template-columns:repeat(1,1fr);
  grid-template-rows:repeat(2,1f);
  grid-template-areas:"slideshow"
                      "text";
}


@media all and (max-width:768px){
  grid-template-columns:repeat(1,1fr);
  grid-template-rows:repeat(2,1f);
  grid-template-areas:"slideshow"
                      "text";
}


@media all and (max-width:425px){
  grid-template-columns:repeat(1,1fr);
grid-template-rows:repeat(2,1f);
grid-template-areas:"slideshow"
                    "text";
}




`
export const SlideShowContainer = styled.div`
width:100%;
height:100%;
grid-area:slideshow;
padding:60px 0 0 0;


@media all and (max-width:768px){
  padding:0;
}


`

export const MySlides = styled.div`

`

const animation = keyframes`
0% {
    opacity:.1;
    transform:translateX(-30%);
  }

  50% {
    opacity: 1;
    transform:translateX(0);
  }

  100% {
    opacity: .1;
    transform:translateX(30%);
  }
`

export const Image = styled.img`
width:100%;
animation:${props => props.animated && css `${animation} 1s 1`};
`





export const SquaresContainer = styled.div`
text-align:center;
`




export const Squares = styled.span`
cursor:pinter;
height:15px;
width:15px;
margin:0 2px;
background-color:${props => props.active ? "#bbb" : "#717171"};
border:radius:50%;
display:inline-block;
transition:background-color: 0.6s ease;
`








export const ContainerTitle = styled.div`
grid-area:text
display:flex;
justify-content:center;
align-items:center;

@media all and (max-width:2560px){
  padding:80px;
}

@media all and (max-width:1440px){
  padding:60px;
}

@media all and (max-width:768px){
  padding:10px 10px 40px 10px;
}

@media all and (max-width:425px){
  padding:10px;
}

@media all and (max-width:375px){
  padding:10px;
}

@media all and (max-width:320px){
  padding: 10px;
}
`

export const Title = styled.h2`
font-family:"Raleway";
font-size:55px;
font-weight:800;
color:${props => props.dark ? "black" : "white"};
margin-bottom:20px;

@media all and (max-width:2560px){
  font-size:65px;
  margin-bottom:30px;
}

@media all and (max-width:1440px){
  margin-bottom:20px;
  font-size:55px;
}


@media all and (max-width:768px){
  font-size:55px;
  text-align:center;
}


@media all and (max-width:425px){
  font-size:46px;
  text-align:left;
}

@media all and (max-width:375px){
  font-size:55px;
}

@media all and (max-width:320px){
  font-size:50px;
}

`


export const SubTitle = styled.h3`
font-family:"Raleway";
font-weight:600;
color:${props => props.dark ? "black" : "white"};
margin:15px 0;

@media all and (max-width:2560px){
  font-size:45px;
  margin:25px 0;
}

@media all and (max-width:1440px){
  font-size:35px;
  margin:15px 0;
}


@media all and (max-width:768px){
  font-size:45px;
}

@media all and (max-width:425px){
  font-size:45px;
}


@media all and (max-width:375px){
  font-size:35px;
}

@media all and (max-width:320px){
  font-size:35px;
}


`

export const Text = styled.p`
font-family:"Raleway";
font-weight:500;
color:${props => props.dark ? "black" : "white"};

@media all and (max-width:2560px){
  font-size:25px;
}

@media all and (max-width:1440px){
  font-size:18px;
}

@media all and (max-width:768px){
  font-size: 22px;
  color:grey;
  font-weight:600;
  
}

@media all and (max-width:425px){
  font-size:18px;
  color:grey;
  font-weight:600;
}

@media all and (max-width:375px){
  font-size:18px;

}


@media all and (max-width:320px){
  font-size:15px;
  
}
`