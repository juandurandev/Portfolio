import React,{Fragment} from 'react';
import {FormSend,FormSection,TextInput,TextAreaInput,EmailInput,InputContainer,InputMock,TextMock,ButtonContainer} from '../styles/Form/Form';
import {Button, GreenTheme} from '../styles/Button/Button'
import {ThemeProvider} from 'styled-components';


export const Form = () => {
    return(
        <Fragment>
            <FormSend action="mailto:juandb182@gmail.com" method="POST" enctype="text/plain">
                <FormSection>
                    {/* <InputContainer>
                        <InputMock>
                            <TextMock>Enter your name</TextMock>
                            <TextInput type="text" placeholder="Enter name"/>
                        </InputMock>
                        <InputMock>
                            <TextMock>Enter your email</TextMock>
                            <EmailInput type="email" placeholder="Enter email" />
                        </InputMock>
                        <InputMock>
                            <TextMock>Send me a message</TextMock>
                            <TextAreaInput placeholder="Enter message"  />
                        </InputMock>
                    </InputContainer> */}
                    <ButtonContainer>
                        <ThemeProvider theme={GreenTheme}>
                            <Button type="submit">Send Message</Button>
                        </ThemeProvider>
                    </ButtonContainer>
                </FormSection>
            </FormSend>
        </Fragment>
    )
}