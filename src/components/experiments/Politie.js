import React from "react";


export default class Politie extends React.Component {
    constructor(){
        super();
        this.state({
            data: null
        })
    }
    render(){
        return (
            <h1>Politie data</h1>
        )
    }
}