import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Home'
        }
    }
    render() {
        return(
            <div>
                Home
            </div>
        )
    }
}