import React, { Component } from 'react';

import * as firebase from 'firebase';


class TodoInput extends Component {
    constructor(props){
    super(props)
    this.state = {
      newTodo:""
    }
    this.addClick = this.addClick.bind(this)
    
  }

  addClick(){
      // let {onAddtodo} = this.props;
      let {newTodo} = this.state;
      // onAddtodo(newTodo)
      this.setState({
          newTodo:""
         
      })
      
   firebase.database().ref('newtodo').push({newTodo});
    
  }

// componentWillMount() {  
//     this.firebaseRef = firebase.database().ref("Todo");
// }


  render() {
      let {newTodo} = this.state //clear
    return (
        <div>
            Add Todo
      <input value={newTodo} onChange={(e) =>this.setState({newTodo:e.target.value})}/>
      <button onClick={this.addClick}>Add</button>
      {/*{this.state.newTodo}
      
  */}

      
      </div>
    );
  }
}
export default TodoInput;
