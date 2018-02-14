import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Students from './Components/Students';

class App extends Component {
    constructor (props) {
      super(props)
      this.state = {
        classroom: this.props.classroom,
        studentSelected: '',
        weightedArray: []
      }
    }
    componentWillMount(){
      let array = this.state.classroom;
      this.weightedArray(array);
    }


    generateStudent () {
      let array = this.state.weightedArray;
      if(this.state.weightedArray.length === 0) {
        return this.weightedArray(this.state.classroom);
      }
      let student = array[Math.floor((Math.random()*array.length))];
      let index = array.findIndex(function (element){
        return element === student;
      });
      this.setState({studentSelected:student, weightedArray:[...array.slice(0,index), ...array.slice(index+1)]});
    }

    weightedArray (array) {
      let weightedArray = [];
      array.forEach(ele=>{
        for(let i = 0; i <= 3; i++){
          weightedArray.push(ele)
        }
      })
      this.setState({weightedArray: weightedArray});
    }

    removeStudent = (name) => {
      let copy = this.state.classroom.slice(0);
      let filtered = copy.filter(student => student !== name);
      this.setState({ classroom: filtered })
      this.weightedArray(this.state.classroom)
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
            <button className="refresh" onClick={() => this.refresh()}>Refresh</button>
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
