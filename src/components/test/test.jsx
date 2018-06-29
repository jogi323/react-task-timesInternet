import React, { Component,Fragment } from 'react'
import * as FontAwesome from 'react-icons/lib/fa';

import './test.css';

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            inputs: ['']
        }
    }
    handleChange = (event,ind) => {
        event.preventDefault();
        let inputs = [...this.state.inputs];
        inputs[ind] = event.target.value;
         this.setState({ inputs });
      }
      addMore= (e) => {
        e.preventDefault();
        const arr = this.state.inputs;
        arr.push('');
        this.setState({
          inputs: arr
        })
      }
      save = (e) => {
        e.preventDefault();
        console.log(this.state.inputs);
      }
  render() {
    return (
      <Fragment>
        <div className="test">
          <div id="shape"></div>
        </div>
        <div className="test2">
          <form className="col-md-6 offset-md-3">
            <div className="form-group">
              <div className="row input-fields">
              {
                this.state.inputs.map((input,i) => {
                  return(
                    <span className="input-field" key={i}>
                      <input  type="text" className="form-control " placeholder="option name like color,size" value={this.state.inputs[i]} onChange={(e)=>this.handleChange(e,i)}/>
                    </span>
                  )
                })
              }
                <button className="btn btn-success no-margin" ><FontAwesome.FaCheck/></button>
                <button className="btn btn-primary"><FontAwesome.FaTrash/></button>
                <button className="btn btn-primary" onClick={this.addMore}> Add More</button>
                <button className="btn btn-success float-right" onClick={this.save}>Save</button>

              </div>
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
}
