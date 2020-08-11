import React from "react";

class SideBar extends React.Component{
    render() {
        const { onButtonClick } = this.props;
        return (
            <div>

                <button onClick={()=>onButtonClick(123)}> Click Me </button>
            </div>
        )
    }
}

export default SideBar