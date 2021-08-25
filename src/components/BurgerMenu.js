import React from 'react';
import {Container,BarOne,BarTwo,BarThree} from '../styles/BurgerMenu/BurgerMenu';






export const BurgerMenu = ({onClick,state}) =>{
    return(
        
            <Container onClick={onClick}>
                <BarOne state={state} />
                <BarTwo state={state} />
                <BarThree state={state} />
            </Container>
       
    )
}