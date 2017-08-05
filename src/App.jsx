import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div>Осталось времени до Декабря 25, 2017</div>
        <div>
          <div>14 Дней</div>
          <div>30 часов</div>
          <div>15 минут</div>
          <div>24 секунд</div>
        </div>
        <input placeholder='новая дата' />
        <button>отправить</button>
      </div>


    )
  }
}

export default App;