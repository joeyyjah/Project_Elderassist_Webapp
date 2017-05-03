import React, { Component } from 'react';
import * as firebase from 'firebase';
import Todoitem from './Todoitem';

class Todolist extends Component {
constructor(props){
    super(props);
    this.state = {
        items : []
    }
    this.itemList = this.itemList.bind(this);
}
componentWillMount(){

    firebase.database().ref('newtodo').on('value',snapshot =>{
        var todos = []
        snapshot.forEach(data=>{
            var todo ={
                text : data.val().newTodo
            }
            todos.push(todo.text)
            this.setState({
                items: todos
            })
            console.log('loop ',this.state.items)
        })
            console.log('todos',JSON.stringify(snapshot.val()))
            console.log('items',JSON.stringify(this.state.items))
        
    })
    
}

itemList(){
    // var {items} = this.state;
    return this.state.items.map((v,i)=>{
        return(
            <Todoitem text={v}/>
        )
    })

}

  render() {
    //   let {items} = this.props
    //   console.log('todolist',JSON.stringify(items))
    return (
        <div>
            <ul>
                    {this.itemList()}
                    {/*{items.map((todo, i) =><li key={i}><Todoitem  text={todo}/></li>)}*/}
                
            </ul>
      
      </div>
    );
  }
}
export default Todolist;