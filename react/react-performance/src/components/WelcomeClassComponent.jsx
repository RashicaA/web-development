import React, { Component } from "react";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            count: 0,
            btnAttributes: {
                text: "click",
                color: "red"
            }
        }
    }


    render() {
        return <>
            <h2>Hello, I am {this.props.name} Component!!</h2>
            <div>
                <p>Counter: {this.state.count}</p>
                <button
                    onClick={() => this.setState({ count: this.state.count + 1 })}
                    style={{ color: this.state.btnAttributes.color }}
                >
                    {this.state.btnAttributes.text}
                </button>
            </div>
        </>
    }
}

export default Welcome

// FUNCTIONAL COMPONENT CODE::

// function Welcome() {
//     return <h2>Hello, I am classbased Component!!!</h2>
// }

// export default Welcome
