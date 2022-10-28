import axios from "axios";
import React, { Component } from "react";

export class Post extends Component{

    constructor(props){
        super(props);

        this.state={
            posts: [],
            msg : ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((response) =>{   
                this.setState({
                    posts: response.data.slice(0,5) 
                })
          })
          .catch((error) =>{
              this.setState({
                msg: 'Could not Load posts'
              })
          });
    }
    render(){
        return(
            <React.Fragment>
                <h1>All Posts</h1>
                <div>{this.state.msg === ''? '' : this.state.msg}</div>

                {
                    this.state.posts.map(e=>{
                        return(
                            <div>
                                ID: {e.id} <br />
                                UserID: {e.userId} <br />
                                Title: {e.title} <br />
                                {e.body}
                                <hr />
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}