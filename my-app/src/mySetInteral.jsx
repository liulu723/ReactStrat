import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      demo:1
    }
  }
  tick(){
    let demo = this.state.demo
    this.setState({
      demo: ++demo
    })
  }
  componentDidMount(){
    this.interal = setInterval(() => this.tick(),1000)
  }
  componentWillUnmount(){
    clearInterval(this.interal)
  }
  render(){
    return (
      <div>{this.state.demo}</div>
    )
  }
}
export default App