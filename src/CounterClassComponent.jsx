import React from "react"

export default class CounterClassComponents extends React.Component {
    constructor(props) {
        super(props);
        console.log("props : ", props);
        this.state = {
            count: 0,
            date: new Date().toDateString()
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count +1,
        })
    };
    decrement = () => {
        this.setState({
            count: this.state.count>0? this.state.count -1: 0,
        })
    };


    render() {
        return (
            <React.Fragment>
                <h1>THIS IS CLAAAAAAAAAAASSSSSSSSSSSSSSSSSSS!!!!   {this.state.count}</h1>
                <button onClick={this.increment}>Add + </button>
                <button onClick={this.decrement}>Subtract - </button>
            </React.Fragment>
        );
    }
}