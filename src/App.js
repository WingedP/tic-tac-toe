import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import FacebookLogin from 'react-facebook-login';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //HERE ARE THE PROPS:
      squares: ['', '', '', '', '', '', '', '', ''],
      nextPlayer: false, // false is X, true is 0
      user: '', //save user's information
      history: [],
      topRank: [],
    }
  }

  setParentsState = (obj) => { this.setState(obj) }

  //question: setParentsState, how did this influence the square array []?

  timeTravel = (item, idx) => {
    this.setState({ squares: item.squares, nextPlayer: item.nextPlayer, history: this.state.history.filter((e, i) => i <= idx) })
  }

  // fetchScores=async()=>{
  //   let url = `https://ftw-highscores.herokuapp.com/tictactoe-dev`;
  //   let response = await fetch(url);
  //   let data=await response.json();
  //   this.setState({highScores: data.items})
  // }












  //=================================//
  //=================================//
  responseFacebook = (response) => {
    // console.log("Result from FB right here: :::::", response);
    this.setState({ user: response.name })
  }
  postData = async (duration) => {
    console.log("HERE");
    let data = new URLSearchParams();
    data.append("player", this.state.user); //data you want to post like (key,value)/ player and score should be fixed
    data.append("score", duration); //{user: nhan, score:3, age: 16} {player:"PLAYER_NAME",score:"TIME_ELAPSED_IN_SECONDS"}
    const url = `https://ftw-highscores.herokuapp.com/tictactoe-dev`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data.toString(),
      json: true
    });
    //issue here: issue solved 
    console.log("WHERE THE F- IS THE RESPONSE????", response);
    this.getData();

  }

  getData = async () => {
    const url = `https://ftw-highscores.herokuapp.com/tictactoe-dev`;
    let result = await fetch(url);
    let data = await result.json();
    console.log("data from api", data);
    this.setState({ topRank: data.items })
  }

  //=================================//
  //=================================//











  render() {

    // if (!this.state.user) {
    //   return (
    //     <FacebookLogin
    //       appId="609157582973627"
    //       autoLoad={true}
    //       fields="name,email,picture"
    //       callback={this.responseFacebook} />)
    // }

    return (
      <div className="main">
        <div className="title">
          <div className="navbar">
            <div className="titletext">tic, tac</div>

            <a href="" >
              <img className="logoimg" src="https://lh3.googleusercontent.com/T-vD9tvlcPBf_1lY-3m8hQ6J-lqBROMkMut-CN5vohyJhk-kfVjfPpb18Uk3aiGPG9_5-fbunw=w128-h128-e365"></img>
            </a>
            <div className="titletext2">toe</div>

            <div className="userInfo">

              {/* <div className="fbLogin">
                <FacebookLogin
                  appId="609157582973627"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={this.responseFacebook} />
                  </div> */}

              <div className="username"> 
              {/* User : {this.state.user} */}
              User: [Player 1]
              </div>


            </div>
          </div>

        </div>

        <div className="historySection">

          <div className="historyMove">
            <div className="historybutton">MOVE HISTORY:</div>
            <ul>
              {
                this.state.history.map((item, idx) => {
                  return (
                    <li><button onClick={() => this.timeTravel(item, idx)}>Move {idx + 1}</button></li>)
                })
              }
            </ul>
            </div>

          <div className="toprank">
          <div className="topscorebutton">TOP SCORE:</div>
            <ol>
              {
                this.state.topRank.map(item => {
                  return (
                    <li>
                      {item.player}: {item.score}
                    </li>
                  )
                })
              }
            </ol>
          </div>

        </div>

        <div className="board">
          <Board {...this.state} setParentsState={this.setParentsState} postData={this.postData} />
        </div>

        {/* <div className="highScores">
            <h2>highScores:</h2>
            <ul>
              {highScores.map(score=>{
                return (
                  <li>
                    {score.player}
                  </li>
                )
              })}
            </ul>
        </div> */}


      </div>
    );
  }
}

export default App;
