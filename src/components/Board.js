import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {
    OnSquareClicked = (i) => {
        console.log("THE BOX NUMBER CLICKED APPEARS HERE:", i)
        //1 == make 1 array and copy the value from parent array
        let squareList = this.props.squares.slice();
        if(this.calculateWinner(squareList)||squareList[i]) {return;}
        //2 == change the value at copied array
        squareList[i] = this.props.nextPlayer ? "O" : "X";
        //3 == insert the 2nd array into parent array
        // question: this squares below is confusing
        this.props.setParentsState({ squares: squareList, nextPlayer: !this.props.nextPlayer })
    }

    calculateWinner = (squares) => { //you shouldnt use {} its just arguement 
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        console.log("square",squares);
    for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i]; 
        console.log("a",a);
        console.log("b",b)

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) 
        {return squares[a];}
        }
        // return null;// this part shouldnt be in for loop if you put it in forloop, it will end after first iteration 
    }
    

    render() {
        const winner = this.calculateWinner(this.props.squares);
       
        let status = '';
      
        if (winner) {
            status ='['+winner+']' +' is the winner! Well played!';
          } else {
            status = this.props.nextPlayer ? `[O] is the next player:` : `[X] is the next player:`;
          }
        //good? so we have to print the result in the return part right? oke I think i get it now
        
        return (
            <div >
                <h2>{status}</h2>
                <div style={{ display: "flex" }}>
                    {/* //QUESTION: instead of this.onSquareClicked, I typed this.props.OnSquareClicked? Why it's wrong? */}
                    <Square className="blue" value={this.props.squares[0]} onClick={() => this.OnSquareClicked(0)}/>
                    <Square value={this.props.squares[1]} onClick={() => this.OnSquareClicked(1)} />
                    <Square value={this.props.squares[2]} onClick={() => this.OnSquareClicked(2)} />
                </div>
                <div style={{ display: "flex" }}>
                    <Square value={this.props.squares[3]} onClick={() => this.OnSquareClicked(3)} />
                    <Square value={this.props.squares[4]} onClick={() => this.OnSquareClicked(4)} />
                    <Square value={this.props.squares[5]} onClick={() => this.OnSquareClicked(5)} />
                </div>
                <div style={{ display: "flex" }}>
                    <Square value={this.props.squares[6]} onClick={() => this.OnSquareClicked(6)} />
                    <Square value={this.props.squares[7]} onClick={() => this.OnSquareClicked(7)} />
                    <Square value={this.props.squares[8]} onClick={() => this.OnSquareClicked(8)} />
                </div>
      

            </div>
        )
    }
}
