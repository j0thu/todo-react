import React, { Component } from 'react'
import './TodoApp.css'
export default class TodoApp extends Component {
    state = {
        input: "",
        items:[] 
     }

    handleChange = event =>{
        this.setState({
            input:event.target.value
        });
    }

    storeItems = (event)=>{
        event.preventDefault();
        const{input} = this.state;

        this.setState({
            items: [...this.state.items, input], //Creating a copy of items array to store the value stored in INPUT (INPUT to items copy)
            input:""
        })
    };

    deleteItem = key =>{
        // const allItems = this.state.items;

        // allItems.splice(key, 1); //1 is given for deleting the current item alone 
        // this.setState({
        //     items: allItems
        // })

        //or follow the below method for deleting using filter
        this.setState({
            items:this.state.items.filter((data, index)=>index!==key)
        });
    }

    render() {
        const {input, items} = this.state;
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit = {this.storeItems}>
                    <h1>Todo App</h1>
                    <input type="text" placeholder="Enter items.." onChange = {this.handleChange} value = {input}/>
                    
                </form>
                <ul>
                    {items.map((data, index)=>(
                        <li key={index}>{data}<i className="fa fa-trash fa-lg" aria-hidden="true" onClick = {()=> this.deleteItem(index)}></i> </li>
                    ))}
                </ul>    
            </div>
        )
    }  
}
