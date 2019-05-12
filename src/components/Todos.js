import React from 'react';
import ThingsTodo from './ThingsTodo';

class Todos extends React.Component {
  render() {
    return this.props.todos.map((list) => (
      <ThingsTodo key={list.id} list={list} onComplete={this.props.onComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

export default Todos;