import React from 'react';

class Homework1 extends React.Component {
    constructor(props) {
        console.log(props);
        super();
        this.state = {
            s1: props.p1
        }
        this.s2 = 201
    }

    componentDidMount() {
        let val = this.state.s1
        this.s1 = this.s1 + 5
        val = (val + 5)
        this.setState({
            s1: val,
        });
    }
    buttonHendler = () => {
        let val = this.state.s1
        this.s2 = this.s2 + 50
        val = (val + 50)
        this.setState({
            s1: val,
        });
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.buttonHendler}>Push me</button>
                </div>
                <div> {this.state.s1}</div>

                <div>{this.s2}</div>

            </>
        )
    }
}


export default Homework1