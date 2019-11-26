import React from 'react';
import { AddEdit } from './AddEdit';
import { ViewAll } from './ViewAll';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {showForm:false, students:[]}
  }


  addButtonPressed = () => {
    //condition ? true : false;
    this.setState({
      showForm:true
    });
  }

  closeButtonPressed = () => {
    this.setState({
      showForm:false
    });
  }

  onDataReady = (studentObj) => {
    let newStudentArray = [...this.state.students,studentObj];
    this.setState({
      students:newStudentArray,
      showForm:false
    })
  }

  render(){
    return <div className="container" style={{paddingTop:20}}>
      <div className="row">
        <div className="col-md-6">
          <button className="btn btn-primary" onClick={this.addButtonPressed}>Add</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-danger float-right" onClick={this.closeButtonPressed}>Close</button>
        </div>
      </div>
      <hr></hr>
      {this.state.showForm ? <AddEdit handleData={this.onDataReady.bind(this)}/> : ''}
      {this.state.showForm ? '' : <ViewAll allStudents={this.state.students}/>}
    </div>
  }
}
