import React, { Component } from 'react';
import axios from 'axios';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:8000/server/get-items.php'
        }).then( response => {
            console.log(response);
        }).catch( error => {
            console.log(error);
        })
    }
    
    render() {
        return (
            <div>
                <h1>Tasks will go here...</h1>
            </div>
        )
    }
}



export default ToDoList;
