import React, { Component,Fragment } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import * as FontAwesome from 'react-icons/lib/fa'

import './usersList.css';

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList: [],
            totalPages: 0,
            itemsPerPage: 24,
            startIndex: 0,
            endIndex: 0,
            displayData: []
        };
        this.showDesc = false;
    }

    componentDidMount() {
        const url = 'https://randomuser.me/api/?results=100';
        axios.get(url).then((res) => {
            const count = Math.ceil(res.data.results.length/this.state.itemsPerPage);

            this.setState({
                usersList: res.data.results,
                totalPages: count,
                endIndex: 24
            },()=>{this.prepareDisplayData(0,24)});

        }).catch((err) => {
            console.log(err)
        });

    };

    prepareDisplayData = (start,end) => {
        const displayData = this.state.usersList.slice(start,end);
        this.setState({
            displayData: displayData
        });
    }

    handlePageClick = (data) => {
        const page = ++data.selected;
        const start = this.state.itemsPerPage * (page - 1);
        const end = this.state.itemsPerPage * page <= this.state.usersList.length ? this.state.itemsPerPage * page : this.state.usersList.length -1;
        this.setState({
            startIndex: start,
            endIndex: end
        });
        this.prepareDisplayData(start,end);
        window.scrollTo(0, 0);          
    };
    selectedUser= (data) => {
        this.props.selectedUser(data);
        this.props.history.push('/userdetails')
    }

    sortUsers = (type) => {
       const users = this.state.displayData.sort(function(a,b) {return (a.name.first > b.name.first) ? type === 'asc' ? 1 : -1: ((b.name.first > a.name.first) ? type === 'asc' ? -1 : 1 : 0);} );
       this.setState({
           displayData: users
       });
       this.showDesc = !this.showDesc;
    }

    render() {
        return (
            <Fragment>
                <div className="col-md-8 offset-md-2 users-list">
                   {this.state.displayData.length > 0 ?  
                    <div>
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name 
                                        { !this.showDesc ?
                                        <span className="sort-icon" onClick={()=>this.sortUsers('asc')}>
                                            <FontAwesome.FaSortAlphaAsc />
                                        </span>:
                                        <span className="sort-icon" onClick={()=>this.sortUsers('desc')}>
                                            <FontAwesome.FaSortAlphaDesc />
                                        </span>
                                        }
                                    </th>
                                    <th>Picture</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.displayData.map((user,i)=>{
                                    return (
                                        <tr className="user-row" key={user.email} onClick={()=>this.selectedUser(user)}>
                                            <td>{i + 1 + this.state.startIndex}</td>
                                            <td>{user.name.first + ' ' + user.name.last}</td>
                                            <td><img src={user.picture.thumbnail} alt="img-thumbnail" className="img-responsive"/></td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="pagination col-6 offset-3">
                            <ReactPaginate previousLabel={"previous"}
                                nextLabel={"next"}
                                breakLabel={<a href="">...</a>}
                                breakClassName={"break-me"}
                                pageCount={this.state.totalPages}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"} 
                            />
                        </div>
                    </div>
                    : 'Please wait...'}
                </div>
            </Fragment>
        )
    }
}
