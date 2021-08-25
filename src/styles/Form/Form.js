import styled from 'styled-components';

export const FormSend = styled.form`

`

export const FormSection = styled.div`
    height:auto;
    width:100%;
`

export const InputContainer = styled.div`
    width:100%;
    height:100%;



    @media all and (max-width:320px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    }
`

export const InputMock = styled.div`
    margin: 10px 0;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const TextMock = styled.h3`
    font-family:"raleway";
    font-weight:500;
    margin:5px 10px;

    @media all and (max-width:1440px){
        width:50%;
        font-size:18px;
        font-weight:600;
    }

    @media all and (max-width:1024px){
        width:50%;
        font-size:18px;
        font-weight:600;
    }

    @media all and (max-width:768px){
        width:90%;
        font-size:15px;
    }


    @media all and (max-width:425px){
        width:90%;
        font-size:15px;
    }


    @media all and (max-width:375px){
        width:90%;
        font-size:15px;
    }


    @media all and (max-width:320px){
        width:90%;
        font-size:15px;
    }
`

export const TextInput = styled.input`
padding:10px;
font-family:"raleway";
outline:none;
border:none;
background-color:#161616;
color:white;
border-radius:5px;

::placeholder{
    color:white;
    font-weight:500;
    opacity:0.8;
}

@media all and (max-width:1440px){
    width:50%;
    height:70px;
    font-size:15px;
}

@media all and (max-width:1024px){
    width:50%;
    height:70px;
    font-size:15px;
}

@media all and (max-width:768px){
    width:90%;
    height:70px;
    font-size:15px;

}

@media all and (max-width:425px){
    width:90%;
    height:60px;
    font-size:15px;
}

@media all and (max-width:375px){
    width:90%;
    height:50px;
    font-size:14px;
}

@media all and (max-width:320px){
    width:90%;
    height:40px;
    font-size:12px;
    font-weight:500;
}




`

export const EmailInput = styled.input`
padding:10px;
font-family:"raleway";
outline:none;
border:none;
background-color:#161616;
color:white;
border-radius:5px;

::placeholder{
    color:white;
    font-weight:500;
    opacity:0.8;
}

@media all and (max-width:1440px){
    width:50%;
    height:70px;
    font-size:15px;
}

@media all and (max-width:1024px){
    width:50%;
    height:70px;
    font-size:15px;
}

@media all and (max-width:768px){
    width:90%;
    height:70px;
    font-size:15px;

}

@media all and (max-width:425px){
    width:90%;
    height:60px;
    font-size:15px;
}

@media all and (max-width:375px){
    width:90%;
    height:50px;
    font-size:14px;
}

@media all and (max-width:320px){
    width:90%;
    height:40px;
    font-size:12px;
    font-weight:700;
}



`

export const TextAreaInput = styled.textarea`
padding:10px;
font-family:"raleway";
outline:none;
border:none;
background-color:#161616;
color:white;
border-radius:5px;

::placeholder{
    color:white;
    font-weight:500;
    opacity:0.8;
}

@media all and (max-width:1440px){
    width:50%;
    height:145px;
    font-size:15px;
}

@media all and (max-width:1024px){
    width:50%;
    height:145px;
    font-size:15px;
}

@media all and (max-width:768px){
    width:90%;
    height:145px;
    font-size:15px;
}

@media all and (max-width:425px){
    width:90%;
    height:115px;
    font-size:14px;
}

@media all and (max-width:375px){
    width:90%;
    height:110px;
    font-size:14px;
}

@media all and (max-width:320px){
    width:90%;
    height:80px;
    font-size:12px;
    font-weight:700;
}
`

export const ButtonContainer = styled.div`
display:flex;
width:100%;
justify-content:center;

@media all and (max-width:2560px){
    margin-top:50px;
    margin-bottom:10px;

}

@media all and (max-width:1440px){
    margin-top:50px;
}

@media all and (max-width:1024px){
    margin-top:50px;
}


@media all and (max-width:768px){
    margin-top:50px;
}


@media all and (max-width:425px){
    margin-top:50px;
}


@media all and (max-width:375px){
    margin-top:50px;
}

@media all and (max-width:320px){
    margin-top:20px;
}
`