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

    removeStudent = (name) => {
      let copy = this.state.classroom.slice(0);
      let filtered = copy.filter(student => student !== name);
      this.setState({ classroom: filtered })
    }

    refresh = () => {
      this.setState({ classroom: this.props.classroom });
    }

    render() {
    return (
      <div className="App">
        <Navbar refresh={this.refresh} />
        <div className = 'container'>
          <div className = "studentList">
            <h3> Classroom List </h3>
            <Students classroom={this.state.classroom} removeStudent={this.removeStudent}/>
          </div>

          <div className = "selectStudentContainer">
            <div className="selectedStudent">{this.state.studentSelected}</div>
            <button className="submitBtn" onClick={()=>{this.generateStudent()}}>Cold Call</button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
