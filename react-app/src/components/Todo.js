import { Component } from "react";
import '../styles/todo.css'; 

export class Todo extends Component{
    constructor(props){
         
        super(props);

        this.state={
              todo:{
                userId: '',
                id: '',
                title : '',
                completed: ''
              }, 
              todos: []  
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=> response.json())
        .then(data=>{
            this.setState({
                todos: data.slice(0,10)
            }); 
        })
        
        
    }
    render(){
         
        return(
            <div>
                <div>
                    {this.state.todos.map(e=>{
                        return(
                            <div className="todo" key={e.id}>
                                ID: {e.id} USERID: {e.userId} <br />
                                title: {e.title} <br />
                                Conpleted: {e.completed? 'true': 'false'} <br />
                                <button onClick={()=>{
                                    this.onDelete(e.id)
                                }}>delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    onDelete(id){
         
        this.setState({
            todos: this.state.todos.filter(e=> e.id !== id)
        })
    }
}