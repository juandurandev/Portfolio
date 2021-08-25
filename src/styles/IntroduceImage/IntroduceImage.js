import styled from 'styled-components';



export const Container = styled.div`
width:100%;
height:auto;
display:flex;
justify-content:center;
align-items:center;
margin:70px 0 20px 0;


@media all and (max-width:2560px){
    margin-top:180px;
}

@media all and (max-width:1024px){
    margin-top:120px;
}


@media all and (max-width:768px){
    margin-top:20px;
}




`

export const Image = styled.img`
width:500px;
box-shadow: 0 8px 16px -8px rgba(0,0,0,.50);
border-radius:5px;

@media all and (max-width:2560px){
    width:65%;
}


@media all and (max-width:1440px){
    border-radius:5px;
    width:60%;

}

@media all and (max-width:1024px){
    border-radius:5px;
    width:20%;
    border-radius:50%;

}

@media all and (max-width:768px){
    
    width:200px;
}



`