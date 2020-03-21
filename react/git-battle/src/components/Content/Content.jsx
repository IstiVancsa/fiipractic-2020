import React from 'react'
class Content extends React.Component{
    constructor(properties){
        super(properties)
        this.state = {
            totalClicks: 0
        }

        this.IncreaseCount = this.IncreaseCount.bind(this);
    }
    IncreaseCount(){
        const cl = this.state.totalClicks + 1
        this.setState({
            totalClicks : cl
        });
    }
    render(){
        return(<button onClick={this.IncreaseCount}>number of clicks: {this.state.totalClicks}</button>)
    }
}

export default Content;