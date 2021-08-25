import React,{Fragment, useContext} from 'react';
import { ResumeButtonContainer,ResumeButton } from '../styles/DownLoadButton/DownLoadButton';
import {Presentation,MyNameIs,MyNamePresentation,SubtitlePresentation,ParagraphPresentation, Section,Container,DesktopSection,ButtonContainer} from '../styles/Introduce/Introduce';
import {IntroduceImage} from './IntroduceImage';
import {useWindowSize} from '../hooks/useWindowSize';

import ThemeContext from '../context/ThemeContext';





export const Introduce = () => {

    const {theme,setTheme} = useContext(ThemeContext);

  

     
    

    const size = useWindowSize();

    return(
        <Fragment>
            <a name="Home"></a>

            {size.width <= 1024
            ?<Container dark={theme}>
            <Section>
            <IntroduceImage />
                <Presentation>
                    <MyNameIs dark={theme}> Welcome, my name is</MyNameIs>
                    <MyNamePresentation dark={theme}>Juan Duran</MyNamePresentation>
                    <ButtonContainer target="_blank" href="/JuanDuranCV.pdf">
                        <ResumeButton dark={theme} target="_blank"  href="/JuanDuranCV.pdf">Resume</ResumeButton>
                    </ButtonContainer>
                    <hr />
                    <SubtitlePresentation dark={theme}>Design and develop web's app and sometime smalls robots.</SubtitlePresentation>
                    <ParagraphPresentation>I'm software engineer based in Valencia, Venezuela secializing in building
                       web's apps another of my hobbies are relationed with computer science.</ParagraphPresentation>
                </Presentation>
            </Section>
            </Container>
            :<Container dark={theme}>
                <Section>
                    <Presentation>
                        <MyNameIs dark={theme}> Welcome, my name is</MyNameIs>
                        <MyNamePresentation dark={theme}>Juan Andrés Durán</MyNamePresentation>
                        <hr />
                        <SubtitlePresentation dark={theme}>Design and develop web's app and sometime smalls robots.</SubtitlePresentation>
                        <ParagraphPresentation>I'm software engineer based in Valencia, Venezuela specializing in building
                        web's apps another of my hobbies are relationed with computer science.</ParagraphPresentation>
                    </Presentation>
                </Section>
                <DesktopSection>
                    <IntroduceImage />
                    <ButtonContainer>
                        <ResumeButton dark={theme} target="_blank"  href="/JuanDuranCV.pdf">Resume</ResumeButton>
                    </ButtonContainer>
                </DesktopSection>
            </Container>
            }
        </Fragment>
    )
}