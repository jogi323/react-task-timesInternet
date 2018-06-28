import React, { Component, Fragment } from 'react';
import './userDetails.css';

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.user);
  }
  backToList = () => {
    this.props.history.push('/');
  }
  render() {
    const user = this.props.user;
    return (
      <Fragment>
        {user.email ? <div className="user-details col-6 offset-3">
          <div className="card">
            <div className="card-head"><h3>User Details</h3></div>
            <div className="card-body">
              <div className="user-image">
                <img src={user.picture.large} />
              </div>
              <div className="main-content">
                <div className="row form-group details">
                  <div className="col-3 offset-1">
                    <label htmlFor="name"><h5>Name</h5></label>
                  </div>
                  <div className="col-1">
                    <h5 className="text-center">:</h5>
                  </div>
                  <div className="col-6">
                    <p className="float-left">{user.name.first + ' ' + user.name.last}</p>
                  </div>
                </div>
                <div className="row form-group details">
                  <div className="col-3 offset-1">
                    <label htmlFor="email"><h5>Email-ID</h5></label>
                  </div>
                  <div className="col-1">
                    <h5 className="text-center">:</h5>
                  </div>
                  <div className="col-6">
                    <p className="float-left">{user.email}</p>
                  </div>
                </div>
                <div className="row form-group details">
                  <div className="col-3 offset-1">
                    <label htmlFor="phone"><h5>Phone</h5></label>
                  </div>
                  <div className="col-1">
                    <h5 className="text-center">:</h5>
                  </div>
                  <div className="col-6">
                    <p className="float-left">{user.phone}</p>
                  </div>
                </div>
                <div className="row form-group details">
                  <div className="col-3 offset-1">
                    <label htmlFor="gender"><h5>Gender</h5></label>
                  </div>
                  <div className="col-1">
                    <h5 className="text-center">:</h5>
                  </div>
                  <div className="col-6">
                    <p className="float-left">{user.gender}</p>
                  </div>
                </div>
                <div className="row form-group details">
                  <div className="col-3 offset-1">
                    <label htmlFor="dob"><h5>DOB</h5></label>
                  </div>
                  <div className="col-1">
                    <h5 className="text-center">:</h5>
                  </div>
                  <div className="col-6">
                    <p className="float-left">{user.dob.date}</p>
                  </div>
                </div>
                <div className="row form-group details">
                  <div className="col-3 offset-1">
                    <label htmlFor="age"><h5>Age</h5></label>
                  </div>
                  <div className="col-1">
                    <h5 className="text-center">:</h5>
                  </div>
                  <div className="col-6">
                    <p className="float-left">{user.dob.age}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="back float-right">
            <a onClick={this.backToList}>Back to list</a>
          </div>
        </div> : 
        <div>
          <h3>No data available</h3>
          <div className="back">
          <a onClick={this.backToList}>Go to list</a>
        </div>
        </div>
      }
      </Fragment>
    )
  }
}
