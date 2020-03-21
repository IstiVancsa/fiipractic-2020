import React from 'react'

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.SaveState = this.SaveState.bind(this);
        this.CancelState = this.CancelState.bind(this);
    }
    SaveState(){
        console.log("State saved!");
    }
    CancelState(){
        console.log("State canceled!");
    }
    render(){
        return(
            <div className="Footer">
                <button onClick={this.SaveState}>Save</button>
                <button onClick={this.CancelState}>Cancel</button>
            </div>
        )
    }
}

export default Footer;