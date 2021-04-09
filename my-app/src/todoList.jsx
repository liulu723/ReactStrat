import React from 'react';
import './todoList.less'
class TodoList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      list:[],
      text:''
    }
  }
handleList(info,index){
  return(
    <li key={index}>{info}</li>
  )
}
handleSubmit(event){
  event.preventDefault();
  const list = this.state.list.slice()
  const week = "星期" +(list.length+1)+": "
  if(list.length>6){
    alert('最多周7')
    return
  }
  list.push((week+this.state.text))
  this.setState({
    list:list,
    text:''
  })
}
handleChange(e){
  this.setState({
    text :e.target.value
  })
}
  render(){
    const listDetail = this.state.list.map((info,index)=>this.handleList(info,index))
    return (
      <div>
        <div>一周计划表</div>
        <ul>
          {listDetail}
        </ul>
        <form onSubmit={(e)=> this.handleSubmit(e)} className='form-style'>
          <input type="text" 
          onChange={(e) =>this.handleChange(e)}
          value={this.state.text}/>
          <button onClick={(e)=> this.handleSubmit(e)}>添加星期{this.state.list.length+1}的代办事务</button>
        </form>
      </div>
    )
  }
}
export default TodoList