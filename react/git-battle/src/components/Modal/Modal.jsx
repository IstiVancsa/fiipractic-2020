import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

class Modal extends React.Component{
    constructor(props){
        super(props);
        console.log("modal constr");
    }
    render(){
        return(
            <div>
                <Header/>
                <div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Modal;
