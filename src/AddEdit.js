import React from 'react';

export class AddEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = { firstName: '', rollNum: '', subject: '' };
    }

    onTextValueChange = (event) => {
        switch (event.target.name) {
            case 'firstName':
                this.setState({
                    firstName:event.target.value
                });
                break;

            case 'rollNum':
                this.setState({
                    rollNum:event.target.value
                });
                break;

            case 'subject':
                this.setState({
                    subject:event.target.value
                });
                break;

            default:
                break;
        }
    }


    onFormSubmitted = (event) => {
        event.preventDefault();
        this.props.handleData(this.state);
    }

    render() {
        return <div className="row">
            <div className="col-md-8 offset-md-2">
                <form onSubmit={this.onFormSubmitted}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="firstName" placeholder="Enter name" className="form-control"
                            value={this.state.firstName} onChange={this.onTextValueChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Roll #</label>
                        <input type="text" name="rollNum" placeholder="Enter roll #" className="form-control"
                            value={this.state.rollNum} onChange={this.onTextValueChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text" name="subject" placeholder="Enter subject" className="form-control"
                            value={this.state.subject} onChange={this.onTextValueChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>

    }
}