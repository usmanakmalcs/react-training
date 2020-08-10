import React from "react";
import SideBar from "./SideBar";

class Layout extends React.Component{

    constructor() {
        super();
        this.state = {
            value: 1,
            count: 0,
            name: '',
            apiData: null,
        }
    }

    componentDidMount() {
        console.log("Component Did Mount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component Did Update");
    }

    handleClick = () => {
        const state = {...this.state};
        state.count = state.count + 1;
        this.setState(state)
    };

    render() {

        return (
            <div>
                <h1>Button clicked {this.state.count} times</h1>
                <button onClick={()=>this.handleClick()}> Click Me </button>
                <SideBar/>
            </div>
        )
    }
}

export default Layout