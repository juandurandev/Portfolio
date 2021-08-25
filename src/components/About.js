import React, { useContext }  from 'react';
import {Section,AboutGrid,SlideShowContainer,MySlides,ContainerTitle,Title,SubTitle,Text} from '../styles/About/About';
import {useWindowSize} from '../hooks/useWindowSize';
import Lottie from 'react-lottie';
import animationData from '../lotties/drawkit-grape-animation-8-LOOP';  

import ThemeContext from '../context/ThemeContext';




export const About = () => {


    const {theme,setTheme} = useContext(ThemeContext);
    
    const size = useWindowSize();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


     

    return(
        <>
            <a name="About"></a>
            <Section dark={theme}>
                <AboutGrid>
                    <SlideShowContainer>
                        <MySlides >
                        {size.width <= 375 && size.width <= 320
                        ? <Lottie options={defaultOptions}  width={290} />
                        :""
                        }
                        {size.width > 375 && size.width <= 425 
                        ?<Lottie options={defaultOptions}  width={350} />
                        :""
                        }
                        {size.width > 425 && size.width <= 768
                        ?<Lottie options={defaultOptions}  width={400} />
                        :""
                        }
                        {size.width > 768 && size.width <= 1024
                        ?<Lottie options={defaultOptions}  width={450} />
                        :""
                        }
                        {size.width > 1024 && size.width <= 1440
                        ?<Lottie options={defaultOptions}  width={500} />
                        :""
                        }
                        {size.width > 1440
                        ?<Lottie options={defaultOptions}  width={600} />
                        :""
                        }
                        
                        </MySlides>
                        <br />
                    </SlideShowContainer>


                    <ContainerTitle>
                        <Title dark={theme}>
                            Software evolved. The Focus has Shifted.
                        </Title>
                        <SubTitle dark={theme} >
                            My Vision
                        </SubTitle>
                        <Text dark={theme}>
                        My vision is to promote the development of high quality software to meet the needs of micro, 
                        medium and large companies. Applying either appropriate or recent technologies. Factors such as 
                        responsibility, human talent and innovation are a fundamental part that complement my education 
                        and progress for the future.
                        </Text>
                        <SubTitle dark={theme}>
                            My Mision
                        </SubTitle>
                        <Text dark={theme}>
                        As a professional in the development and management of software, I am committed to provide confidence and 
                        improve the quality of my work and my clients. I aim to contribute to business development, designing products 
                        and services of high competitiveness that are of vital importance for the production of the company.
                        </Text>
                    </ContainerTitle>
                </AboutGrid>

            </Section>
        </>
    )
}