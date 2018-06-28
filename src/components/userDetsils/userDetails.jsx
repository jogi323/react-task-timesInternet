import React, { Component, Fragment } from 'react';

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.user);
  }
  render() {
    return (
      <Fragment>
        <div className="user-details col-md-8 offset-md-2">
        <h3>User Details</h3>
          <div className="card">
            <div className="card-head">Basic card</div>
            <div className="card-body">Basic card</div>
          </div>
        </div>
      </Fragment>
    )
  }
}
