import styled from 'styled-components';





export const Container = styled.div`
background-color:${props => props.dark ? "white" : "black"};
width:100%;
padding:10px;
transition:1s;

`
export const ProjectsTitle = styled.div`
display:flex;
justify-content:center;
color:${props => props.dark ? "black" : "white"};


& h2{
    
    font-family:raleway;
    margin:20px 0px 20px 0px;
    font-weight:800;

    @media all and (max-width:2560px){
        font-size:80px;
    }

    @media all and (max-width:1440px){
        font-size:50px;
    }

}

`

export const ContainerGrid = styled.div`
display:grid;
background-color:${props => props.dark ? "white" : "dark"};
transition:1s;
grid-template-columns:repeat(3,1fr);
grid-gap:20px;
margin:25px auto 35px auto;
justify-content:center;

@media all and (max-width:2560px){
    grid-template-columns:repeat(3,1fr);
    width:90%;
   /*  height:1000px;  */ 
    
}

@media all and (max-width:1440px){
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(2,1fr);
    width:90%;
   /*  height:800px;  */  
    
}

@media all and (max-width:1024px){
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(2,1fr);
    grid-row-gap:25px;
    width:90%;
  /*   height:700px; */
    
}

@media all and (max-width:768px){
    grid-template-columns:repeat(2,1fr);
    grid-template-rows:repeat(1,1fr);
    width:100%;
    /* height:1400px; */
}

@media all and (max-width:600px){
    grid-template-columns:repeat(2,1fr);
    grid-template-rows:repeat(1,1fr);
    width:100%;
    /* height:1300px; */
}



@media all and (max-width:425px){
    grid-template-columns:repeat(1,auto);
    width:100%;
    /* height:1300px; */
}

@media all and (max-width:375px){
    grid-template-columns:repeat(1,auto);
    width:100%;
   /*  height:1300px; */
}

@media all and (max-width:320px){
    margin:10px auto;
    grid-template-columns:repeat(auto-fill,minmax(250px, 1fr));
    /* height:1500px; */
}
`





