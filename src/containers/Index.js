import React,{useState} from 'react';
import {Footer} from '../components/Footer';
import {Projects} from '../components/Projects';
import {Introduce} from '../components/Introduce';
import {Navigation} from '../components/NavBar';
import {Preview} from '../components/Preview';
import {About} from '../components/About';
import {GlobalStyles } from '../styles/GlobalStyles';

import ThemeContext from '../context/ThemeContext';


export const Index = () => {
    const [theme,setTheme] = useState(true);
    return(

        <ThemeContext.Provider value={{theme,setTheme}}>
            <div className="index">
                <Navigation />
                <Introduce />
                <About />
                <Preview  />
                <Projects />
                <Footer />
                <GlobalStyles />
            </div>
        </ThemeContext.Provider>
    )

}