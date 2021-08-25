import React,{Fragment, useCallback} from 'react';
import {DescriptionCard,ImageCard,PreviewCardContainer, TitleCard} from '../styles/Preview/Preview'
import ThemeContext from '../context/ThemeContext';


export const PreviewCard = ({img,title,description,theme}) => {

    return(
        <Fragment>
            <PreviewCardContainer dark={theme}>
                <ImageCard src={img} />
                <TitleCard dark={theme}>{title}</TitleCard>
                <DescriptionCard>{description}</DescriptionCard>
            </PreviewCardContainer>
        </Fragment>
    )

}