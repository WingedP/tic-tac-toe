import React, { Component } from 'react'
import "./Square.css";

export default class Square extends Component {
    
    render() {
        const styles = {}
if(!! this.props.value) { // not undefined
  styles.color = this.props.value === "X" ? 'Teal': 'orange'
  styles.backgroundColor = this.props.value === "X" ? 'Pink': 'DarkMagenta'
}
        return (
            <div onClick={()=>this.props.onClick()} style={styles} className="squaree" 
            // style={{ width: "200px", height: "200px", fontSize: "30px" }}
            >
               {this.props.value}
                {/* <h4>hello...</h4> */}
            </div>
        )
    }
}

