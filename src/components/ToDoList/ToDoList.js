import React, { Component } from 'react';
import axios from 'axios';
import ToDoItem from '../ToDoItem/ToDoItem';

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
            this.setState({
                tasks: response.data
            });
        }).catch( error => {
            console.log(error);
        })
    }
    
    render() {
        return (
            <div>
                <h1>Tasks will go here...</h1>
                <ToDoItem tasks={this.state.tasks} />
            </div>
        )
    }
}



export default ToDoList;
