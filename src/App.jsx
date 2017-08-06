import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'Декабря 25, 2017',
      newDeadLine: ''
    }
  }

  changeDeadLine() {
    this.setState({
      deadline: this.state.newDeadLine,

    });
  }
  
  render() {
    return (
      <div className='App'>
        <div className='App-title'>Осталось времени до {this.state.deadline}</div>
        <Clock />
        <div>
          <input 
          onChange={ event => this.setState({newDeadLine: event.target.value}) }
          placeholder='Новая дата' />
          <button onClick={ () => this.changeDeadLine() }>Отправить</button>
        </div>
      </div>


    )
  }
}

export default App;