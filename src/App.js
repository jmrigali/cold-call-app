import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Students from './Components/Students';

class App extends Component {
    constructor (props) {
      super(props)
      this.state = {
        classroom: this.props.classroom,
        studentSelected: ''
      }
    }

    generateStudent () {
      let student = this.state.classroom[Math.floor((Math.random()*this.state.classroom.length)+ 1)]
      this.setState({studentSelected:student});
    }

    render() {
    return (
      <div className="App">
        <Navbar />
        <div className="selectedStudent">{this.state.studentSelected}</div>
        <button className="submitBtn" onClick={()=>{this.generateStudent()}}>Cold Call</button>

        <Students classroom={this.state.classroom} />

      </div>
    );
  }
}

export default App;
