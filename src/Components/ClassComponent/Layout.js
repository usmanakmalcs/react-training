import React from "react";
import {connect} from 'react-redux';
import SideBar from "./SideBar";
import {saveCount} from "../../store/user-panel/user-panel-actions";

class Layout extends React.Component{

    constructor() {
        super();
        this.state = {
            value: 1,
            name: '',
            apiData: null,
        }
    }

    componentDidMount() {
        console.log("Component Did Mount");
    }


    handleClick = (data) => {
        // console.log("Child Data", data);
        // const state = {...this.state};
        // state.count = state.count + 1;
        // this.setState(state)

        let { count, saveClickCount } = this.props;
        count += 1;
        saveClickCount(count);
    };

    render() {
        const { count } = this.props;
        return (
            <div>
                <h1>Button clicked {count} times</h1>

                <SideBar onButtonClick={(childData) => this.handleClick(childData)}/>
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    console.log(state);
    console.log("Fetching Data From Reducer in Component");
    return {
        count: state.user_reducer.count
    }
};

const mapDispatchToProps = (dispatch) => {
    console.log("Saving Data From Component to Reducer");
    return {
        saveClickCount: (data)=> dispatch(saveCount(data))
    }
};

// function1 -> to get data from reducer so that you can use in component,
// function2 -> to store data in reducer
// export default connect(function1,function2)(Layout)

export default connect(mapStateToProps,mapDispatchToProps)(Layout)