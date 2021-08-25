import React,{Fragment, useContext} from 'react';
import GitHubIcon2 from '../icons/GitHubIcon2';
import LinkIcon from '../icons/LinkIcon';

import {ContainerCard,CardImage,Image,DescriptionContainer,
    TitleContainer,Description,Title,SubTitle,DescriptionText
    ,TechnologiesUsed,ButtonsSection,ButtonsContainer,GoToDemo,SeeCode,TextCardb} from '../styles/Card/Cards';

import ThemeContext from '../context/ThemeContext';


export const ProjectCard = ( {title,text,subTitle,tech,linkGitHub,linkApp,image} ) => {

    const {theme,setTheme} = useContext(ThemeContext);

    return(

        <Fragment>  
           

            <ContainerCard>
                <CardImage>
                    <Image src={image} />
                </CardImage>

                <DescriptionContainer>
                            <TitleContainer dark={theme}>
                                <Title>{title}</Title>
                                <SubTitle>{subTitle}</SubTitle>
                            </TitleContainer>
                            <Description dark={theme}>
                                <DescriptionText>{text}</DescriptionText>
                                <TechnologiesUsed>{tech}</TechnologiesUsed>
                                <ButtonsSection>
                                    <ButtonsContainer>
                                        <SeeCode target="_blank" href={linkGitHub}><GitHubIcon2 width="30px" /></SeeCode>
                                        <GoToDemo target="_blank" href={linkApp}><LinkIcon width="30px" /></GoToDemo>
                                    </ButtonsContainer>
                                </ButtonsSection>
                            </Description>
                        </DescriptionContainer>
                
            </ContainerCard>

            {/* <ContainerCard>
                <CardImage>
                    <Image src={image} />
                    </CardImage>
                        <DescriptionContainer>
                            <TitleContainer dark={theme}>
                                <Title>{title}</Title>
                                <SubTitle>Subtitulo del proyecto</SubTitle>
                            </TitleContainer>
                            <Description dark={theme}>
                                <DescriptionText>{text}</DescriptionText>
                                <TechnologiesUsed>{tech}</TechnologiesUsed>
                                <ButtonsSection>
                                    <ButtonsContainer>
                                        <SeeCode target="_blank" href={linkGitHub}><GitHubIcon2 width="30px" /></SeeCode>
                                        <GoToDemo target="_blank" href={linkApp}><LinkIcon width="30px" /></GoToDemo>
                                    </ButtonsContainer>
                                </ButtonsSection>
                            </Description>
                        </DescriptionContainer>
                </ContainerCard> */}
        </Fragment>



    )



}