import React from "react";
class StateComponent extends React.Component
{
    constructor(){           //constructor - kind of function
        super()
this.state={
    name:"Rithika" ,
    course: "MERN"
}
    }
    ChangeState=(params) => {
        console.log("rithi") // useState should be used when we use hooks: 
    }
    render()
    {
        return(
            <div>
                <h1>
                    This is state component
                </h1>
                <h2>
                    helo,{this.state.name}<br></br>this is {this.state.course} class
                </h2>
                <h3>
                    i am changing the state of {this.state.name} to {this.ChangeState}
                </h3>
                <button onMouseOver={this.ChangeState}>click here to change the state</button>
            </div>
        )   
    }
}
export default StateComponent;