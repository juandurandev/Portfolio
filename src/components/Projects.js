import React,{Fragment, useContext, useState} from 'react';
import {Container,ContainerGrid,ProjectsTitle} from '../styles/Projects/Projects';
import {ProjectCard} from '../components/ProjectCard';
import  ThemeContext  from '../context/ThemeContext';
import { ButtonContainer,Button } from '../styles/ProjectButton/ProjectButton';

const fakeAPI = [
    {
        "id":1,
        "title":"Portfolio",
        "subTitle":"My Portfolio",
        "image":"/portfolio2.png",
        "text":"This is my own portfolio desing and develop with tecnologies",
        "tech":"React.js NextJS Styled-Components",
        "linkGitHub":"github",
        "linkApp":"linkApp"
    },
    {   "id":2,
        "title":"Foddie",
        "subTitle":"Simple Cooking for all",
        "image":"/Foodie.png",
        "text":"This is a fast way to find foods recipes to cook and enjoy ",
        "tech":"react.js Styled-Components",
        "linkGitHub":"https://github.com/juandurandev/Foodie",
        "linkApp":"https://foodie.vercel.app/"
    },
    {
        "id":3,
        "title":"Comming Soon",
        "subTitle":"Comming Soon",
        "text":"Comming Soon",
        "tech":"Comming Soon",
        "linkGitHub":"github",
        "linkApp":"linkApp"
    },
    {
        "id":4,
        "title":"Comming Soon",
        "subTitle":"Comming Soon",
        "text":"Comming Soon",
        "tech":"Comming Soon",
        "linkGitHub":"github",
        "linkApp":"linkApp"
    },
    {
        "id":5,
        "title":"Comming Soon",
        "subTitle":"Comming Soon",
        "text":"Comming Soon",
        "tech":"Comming Soon",
        "linkGitHub":"github",
        "linkApp":"linkApp"
    },
    {
        "id":6,
        "title":"Comming Soon",
        "text":"Comming Soon",
        "tech":"Comming Soon",
        "linkGitHub":"github",
        "linkApp":"linkApp"
    },
    {
        "id":7,
        "title":"Comming Soon",
        "subTitle":"Comming Soon",
        "text":"Comming Soon",
        "tech":"Comming Soon",
        "linkGitHub":"github",
        "linkApp":"linkApp"
    },
    {
        "id":8,
        "title":"Comming Soon",
        "subTitle":"subTitle",
        "text":"Comming Soon",
        "tech":"Comming Soon",
        "linkGitHub":"github",
        "linkApp":"linkApp"
    },
    {
        "id":9,
        "title":"Comming Soon",
        "subTitle":"Comming Soon",
        "text":"Comming Soon",
        "tech":"Comming Soon",
        "linkGitHub":"github",
        "linkApp":"linkApp"
    },
]


export const Projects = () => {


    const [show,setShow] = useState(false);
    const moreItems = show ? fakeAPI.length : 6;

    const {theme,setTheme} = useContext(ThemeContext);

    return(
        <Fragment>
            <Container dark={theme} >
                <ProjectsTitle dark={theme}>
                    <h2><a name="Projects">Projects</a></h2>    
                </ProjectsTitle>   
                <ContainerGrid dark={theme}>
            {fakeAPI.length > 0 &&
                fakeAPI.slice(0,moreItems).map((res) => (
                    <ProjectCard
                    key={res.id} 
                    title={res.title} 
                    subTitle={res.subTitle}
                    image={res.image}
                    text={res.text} 
                    tech={res.tech}
                    linkGitHub={res.linkGitHub}
                    linkApp={res.linkApp}   />
                ))
            }
                </ContainerGrid>    
                <ButtonContainer>
                    {show === false 
                    ?<Button onClick={() => setShow(true)} dark={theme} >Load More</Button>
                    :<Button onClick={() => setShow(false)} dark={theme} >Show Less</Button>
                    }
                </ButtonContainer>        
            </Container>  
        </Fragment>
    )
}