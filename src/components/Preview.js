import React,{Fragment, useContext} from 'react';
import {Container, PreviewTitle,ContainerGrid,Section} from '../styles/Preview/Preview';
import {PreviewCard} from './PreviewCard';


import ThemeContext from '../context/ThemeContext';



const fakeAPI = [
    {
        "id":1,
        "img":"backendc.png",
        "title":"Front End",
        "description":"I like design and all my apps area designed by me",
    },
    {
        "id":2,
        "img":"db2.png",
        "title":"Back End",
        "description":"I really like the infrastructure to make my projects scalables, secures, fast and easy to use.",
    },
    {
        "id":3,
        "img":"sw.png",
        "title":"Make Robots",
        "description":"I build prototypes of IoT projects all the time to make my life easier.",
    },
    {
        "id":4,
        "img":"artificial-intelligence.png",
        "title":"AI",
        "description":"The AI is one of the my favorite fields and i trying to specializing of this.",
    },
    {
        "id":5,
        "img":"smartphone-tablet.png",
        "title":"Mobile Development",
        "description":"Make apps for mobiles is my new hobby that i am learning.",
    },
    {
        "id":6,
        "img":"design.png",
        "title":"UI & UX design",
        "description":"Make apps for mobiles is my new hobby that i am learning.",
    },
]



export const Preview = () => {
    const {theme,setTheme} = useContext(ThemeContext);

    return(
        <Fragment>
            
            <Section dark={theme}>
                <PreviewTitle dark={theme}>
                    <h2><a name="Preview">What i like to do?</a></h2>
                </PreviewTitle>
                <Container>
                <ContainerGrid>
                    {fakeAPI.length > 0 && 
                        fakeAPI.map((res) => (
                            <PreviewCard theme={theme}
                            key={res.id} 
                            img={res.img} 
                            title={res.title} 
                            description={res.description} 
                            />
                        ))
                    }
                </ContainerGrid>
                </Container>
            </Section>
        </Fragment>
    )

}