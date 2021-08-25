import React from 'react';

import {Container,IconContainer,Icon} from '../styles/SwitchTheme/SwithTheme';




export const SwitchButton = ({onClick,state}) => {
    return(
        <>
            <Container onClick={onClick}>
                        <IconContainer>
                            {state === true 
                            ?<Icon>☀️</Icon>
                            :<Icon>🌙</Icon>
                            }                    
                        </IconContainer>
            </Container>
        </>

    );
}