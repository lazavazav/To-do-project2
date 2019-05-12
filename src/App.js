import React from 'react';
import './App.css';
import Header from './components/functional/Header';
import AddToList from './components/AddToList';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: [
      { id: 1,
        title: 'Walk the dog',
        finished: false
      },
      { id: 2,
        title: 'Vacuum the carpet',
        finished: false
      },
      { id: 3,
        title: 'Take out the trash',
        finished: false
      }
    ]
  }

onComplete = (id) => {
  this.setState({todos: this.state.todos.map(
    list => { if(list.id === id) {
      list.finished = !list.finished}
      return list;
    })
  });
}

delTodo = (id) => {this.setState({ todos: [...this.state.todos.filter(list => list.id !== id)] });
}

addToList = (title) => {
  const newTodo= {
    id: 4,
    title,
    finished: false   
  }
  this.setState({ todos: [...this.state.todos, newTodo] });
}


  
  render ()  {
    return (
    <div className="App">
    <Header />
    <AddToList addToList={this.addToList} />
    <Todos todos={this.state.todos} onComplete={this.onComplete} delTodo={this.delTodo}/>
    </div>
    );
  }
}

export default App;
