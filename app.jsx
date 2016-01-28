import React from 'react';

class App extends React.Component{
 
  constructor(){
    super();
    this.state = {
      todos: []
    };
  }
  
  addTodo(e) {
    e.preventDefault();
    var text = this.refs.text.value;
    this.setState({
      todos: this.state.todos.concat({
        text: text,
        id: Math.floor(Math.random() * 10000000000000001)
      })
    });
    this.refs.text.value = '';
  }
  
  handleRemove(id) {
    var todos = this.state.todos;
    var index;
    this.setState({
      todos: todos.filter(function(todo){
              return todo.id !== id;
      })
    });
  }

 render(){
 	const styles = {
 		text:{
 			color: 'white'
 		}
 	};
   return(
     <div>
       <form onSubmit={this.addTodo.bind(this)}>
         <input ref="text" type="text" />
         <button onClick={this.addTodo.bind(this)}>add</button>
       </form>
         {this.state.todos.map(function(todo, i){
           return(
             <div key={i}>
               <li style={styles.text} key={i}>{todo.text}</li>
               <button key={todo.id + 1} onClick={this.handleRemove.bind(this, todo.id)}>remove</button>
             </div>
           );
         }, this)}
     </div>
   );
 }
};


export default App;