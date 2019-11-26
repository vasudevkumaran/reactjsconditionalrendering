import React from 'react';

export class ViewAll extends React.Component{
    
    render(){
        return <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Name</th>
                            <th>Roll #</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allStudents.map((obj,index) => {
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{obj.firstName}</td>
                                <td>{obj.rollNum}</td>
                                <td>{obj.subject}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}