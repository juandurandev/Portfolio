import styled from 'styled-components';

export const Container = styled.div`
    color:white;
    background-color:black;
    width:100%;
    padding-top:10px;

`


export const ContactTitle = styled.a`
    display:flex;
    justify-content:center;
    font-size:50px;
    font-family:'Raleway';
    color:white;
    font-weight:800;
    margin:20px 0;

    @media all and (max-width:2560px){
        font-size:70px;
        margin:40px 0;
    }

    @media all and (max-width:1440px){
        margin:20px 0;
        font-size:50px;
    }
`




export const Foot = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:50px 50px;
    grid-template-areas:
    ". li ."
    ". text .";

    @media all and (max-width:2560px){
        grid-template-rows:80px 80px;
        
    }

    @media all and (max-width:1024px){
        grid-template-rows:50px 50px;
        
    }

`


export const Networks = styled.div`
    grid-area:li;
    display:flex;
    align-self:flex-end;
    justify-self:center;
   

    & ul{
        display:flex;
        margin:0;
        padding:0;

        & li{
            margin:0 20px;
            list-style-type:none;
            padding:0;
            

        }

    }
        @media all and (max-width:2560px){
            align-self:center;
        }

        @media all and (max-width:1024px){
            align-self:flex-end;
        }

`

export const Mention = styled.div`
  grid-area:text;
  justify-self:center;
  align-items:center;
`

export const MentionLetters = styled.p`
font-family:'Rubik Mono One';
font-size:10px;
color:white;
text-align:center;
margin-top:${props => props.sep ? 5+'px' : 0+'px'}; 


@media all and (max-width:2560px){
    font-size:30px;
}


@media all and (max-width:1440px){
    font-size:18px;
}

@media all and (max-width:1024px){
    font-size:10px;
}
`
