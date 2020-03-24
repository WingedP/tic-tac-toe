import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //HERE ARE THE PROPS:
      squares: ['', '', '', '', '', '', '', '', ''],
      nextPlayer: false // false is X, true is 0

    }
  }

  setParentsState = (obj) => { this.setState(obj) }
  //question: setParentsState, how did this influence the square array []?
  render() {
    return (
      <div className="main">
        <div className="title">
          <div className="navbar">
            <div className="titletext"> No history</div>
         
            <a href="" >
              <img className="logoimg" src="https://lh3.googleusercontent.com/T-vD9tvlcPBf_1lY-3m8hQ6J-lqBROMkMut-CN5vohyJhk-kfVjfPpb18Uk3aiGPG9_5-fbunw=w128-h128-e365"></img>
            </a>
            <div className="titletext2"> Not yet **</div>
   </div>
        </div>
        <div className="board">

          <Board {...this.state} setParentsState={this.setParentsState} />
        </div>

      </div>
    );
  }
}

export default App;
