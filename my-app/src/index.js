import React from 'react';
import ReactDOM from 'react-dom';
import MySetInteral from './mySetInteral'
import Game from './game'
import TodoList from './todoList'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      demoList :['MySetInteral','Game','TodoList'],
      currentDemoIndex:0
    }
  }
  switchDemo(index){
    this.setState({
      currentDemoIndex:index
    })
  }
  currentDemo(){
    let el
    switch(this.state.currentDemoIndex){
      case 0:
        el = <MySetInteral />;
        break;
      case 1:
        el = <Game />;
        break;
      case 2:
        el = <TodoList />
        break;
      default:
        el= <div>错误</div>
    }
    return el
  }
  render(){
    const tabList = this.state.demoList.map((demo,index) => 
      <li key={index} onClick={() =>this.switchDemo(index)} className={this.state.currentDemoIndex===index?'selectedDemo':''}>{demo}</li>
    )
    return (
      <div>
        <ul className="tabList">
          {tabList}
        </ul>
        {this.currentDemo()}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
