# creating a todo app using react js and Ecma Script 6(ES6) in Bangla


-----
# ES6

### new assignment keyword

~~~js
let hello = 'hellow';
const hello = 'hellow';
~~~

### object destructuring 
~~~js
var friends = {
  sumon: {
    name: 'sumon',
    email: 'sumon@gmail.com'
  },
  palash: {
    name: 'palash',
    email: 'palash@gmail.com'
  }
}
var {sumon, palash} = friends
~~~

### property value shorthand
~~~js
var todos = ['some todo elements'];
var hello = {todos: todos}
// if property and value are same we can omit value
var hello = {todos}
~~~

### array destructuring 
~~~js
var fruits = ['apple', 'orange', 'banana'];
newfruits = [...fruits, mango] // ['apple', 'orange', 'banana', 'mango']
~~~

## Fat arrow
~~~js
//with single argument
var hello = a1 => a1 * 2;
//with multiple arguments
var hello = (a1, a2) => a1 * a2;
~~~

### class with inheritance 
~~~js
class Hello extends React.Component {
  hello =  () => {

  }
}
~~~

### export and import 
~~~js
//export from a page
export default Hello;

//import Hello
import Hello from './Hello.js';
~~~

# react js

### Basic structure (Here destructuring Component). `render` have to be used
~~~js
import React, { Component } from 'react';

class Hello extends Component {
	render() {
		return (
			<div></div>
		);
	}
}
export default Hello;
~~~

### to change state

~~~js
setState({key: value});
~~~

### to read todo I have iterate todos using map function 

~~~js
todos.map(todo => {
	//what ever i want to do with todo
	});
~~~

### to create todo I destructuring older todos and concat new todos

~~~js
let todos = [...oldertodos, newtodo];
~~~
### to update todo I have used array map function. and inside array map I have return updated todos by using a conditional statement
~~~js
todos.map(todo => {
	if (todo.id === td.id) {
        return {
          id: todo.id,
          completion: todo.completion,
          text: this.state.updateTodoText
        }
      }else {
        return todo;
      }
	});
~~~

### to delete todo I have used array filter method. I have filtering all todos which not match with id of deleted todo. and set state newly filtered todo
~~~js
_deleteTodo = (td) => {
    var todos = this.state.todos.filter(todo => todo.id !== td.id);
    this.setState({todos});
  }
~~~






~~~js

~~~
### to read todo I have used array map function 

~~~js

~~~




