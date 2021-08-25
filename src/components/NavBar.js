import React, {Fragment,useContext,useEffect,useState} from 'react';
import {NavBar,NavText,NavIcon,NavImage} from '../styles/NavBar/NavBar';
import Link from 'next/link';
import {useWindowSize} from '../hooks/useWindowSize';
import {BurgerMenu} from './BurgerMenu'; 
import {SwitchButton} from '../components/SwitchTheme';


import  ThemeContext  from '../context/ThemeContext';


export const Navigation = () => {

    const [down,setDown] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
          } 

          if (offset === 0) {
              setDown(true);
          }


          let timer = null;
          window.addEventListener('scroll', function() {
              if(timer !== null) {
                  clearTimeout(timer); 
                  setDown(false);       
              }
              timer = setTimeout(() => {
                    setDown(true);
              }, 800);
          }, false);
        }, []);




    
    const [darkMode,setDarkMode] = useState(false);
    const {theme,setTheme} = useContext(ThemeContext);
    
    const handleMode = () => {
        setDarkMode(!darkMode);
        theme === true ? setTheme(false) : setTheme(true);
       
    };



    const [click,setClick] = useState(false);
    const handleClick = () =>  setClick(!click) ;

    const size = useWindowSize(); 

    return(
        <Fragment>
            
           {console.log(darkMode)}
        
            <NavBar dark={theme}  down={down} >
                <NavIcon>
                {size.width <= 768
                ?<BurgerMenu onClick={handleClick} state={click} />
                : ""
                }
                </NavIcon>
                    <NavText dark={theme} open={click}>
                        <Link href="#Home">
                            <a  onClick={handleClick} >Home</a>
                        </Link>
                        <Link href="#About" >
                            <a>About</a>
                        </Link>
                        <Link href="#Preview">
                            <a onClick={handleClick}>Preview</a>
                        </Link>
                        <Link href="#Projects">
                            <a  onClick={handleClick} >Projects</a>
                        </Link>
                        <Link href="#Contact">
                            <a  onClick={handleClick} >Conctact</a>
                        </Link> 
                        <div>
                            <SwitchButton onClick={handleMode} state={darkMode} />                 
                        </div> 
                </NavText>
            </NavBar>
        </Fragment>
    )

}
