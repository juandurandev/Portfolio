import React,{Fragment} from 'react';
import {Foot,Networks,Mention,MentionLetters,Container,ContactTitle} from '../styles/Footer/Footer';
import {Form} from '../components/Form';
import {GitHubIcon} from '../icons/GithubIcon';
import {InstagramIcon} from '../icons/InstagramIcon';
import {LinkedInIcon} from '../icons/LinkedInIcon';
import {TwitterIcon} from '../icons/TwitterIcon';



export const Footer = () => {
    return(
        <Fragment>
            <Container>
                <ContactTitle name="Contact">Contact</ContactTitle>
                <Form />    
                <Foot>
                    <Networks>
                    <ul>
                        <li>
                            <a href="https://github.com/juandurandev" target="_blank">
                                <GitHubIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/juanduranb_/" target="_blank">
                                <InstagramIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/juanduranb/" target="_blank">
                                <LinkedInIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/JuanDuranb_" target="_blank">
                                <TwitterIcon />
                            </a>
                        </li>
                    </ul>
                    </Networks>
                <Mention>
                    <MentionLetters sep>Development and Designer</MentionLetters>
                    <MentionLetters sep> &lt;Juan Duran /&gt;</MentionLetters>
                </Mention>
                </Foot>
            </Container>
        </Fragment>
    )




}