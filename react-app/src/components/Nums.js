import { Component } from "react";

export class Nums extends Component{

    constructor(props){
        super(props);

        this.state={
            arry: [4,2,6,8,1,5,9,7]
        }
    }
    
    render(){
        return(
            <div>
                <ul>
                    { this.state.arry.map(e=>{
                        return(
                            <li key={Math.random()*10000}>{e}</li>
                        )
                    })}
                    <button onClick={()=>{
                        this.sort('ASC')
                    }}>Sort-ASC</button> <button onClick={()=>{
                        this.sort('DESC')
                    }}>Sort-DSC</button>
                </ul>
            </div>
        )
    }

    sort(op){
        if(op === 'ASC'){
            this.setState({
                arry: this.state.arry.sort((a,b)=>a-b)
            })
        }
        else{
            this.setState({
                arry: this.state.arry.sort((a,b)=>b-a)
            })
        }
    }
}