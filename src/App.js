import React from "react";
import {io} from "socket.io-client"
class App extends React.Component{
  constructor(){
    super();
    // this.socket = io("http://localhost:3001")
    this.state={
      msg : ""
    }
  }
  handleChange =(event)=>{
    this.setState({
      msg:event.target.value
    })
  }
  handleSubmit = ()=>{
    var socket = io("http://localhost:3001");
    socket.emit('chat message', this.state.msg);
    socket.on('chat message', (value)=>{
      console.log(value);
    })
  }
  render(){
    return(
      <div>Hello
        <input type="text" id="msg" name="msg" onChange={this.handleChange} value={this.state.msg}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
      
    )
  }
}

export default App