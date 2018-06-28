import React, { Component,Fragment } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import './usersList.css';

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList: [],
            totalPages: 0,
            itemsPerPage: 24,
            startIndex: 0,
            endIndex: 0
        };
    }

    componentDidMount() {
        const url = 'https://randomuser.me/api/?results=100';
        axios.get(url).then((res) => {
            const count = Math.ceil(res.data.results.length/this.state.itemsPerPage);
            this.setState({
                usersList: res.data.results,
                totalPages: count,
                endIndex: 24
            })
        }).catch((err) => {
            console.log(err)
        });

    };

    handlePageClick = (data) => {
        const page = ++data.selected;
        const start = this.state.itemsPerPage * (page - 1);
        const end = this.state.itemsPerPage * page <= this.state.usersList.length ? this.state.itemsPerPage * page : this.state.usersList.length -1;
        this.setState({
            startIndex: start,
            endIndex: end
        });
        window.scrollTo(0, 0);          
    };
    selectedUser= (data) => {
        this.props.selectedUser(data);
        this.props.history.push('/userdetails')
    }

    render() {
        const displayData = this.state.usersList.slice(this.state.startIndex,this.state.endIndex);
        console.log(displayData)
        return (
            <Fragment>
                <div className="col-md-8 offset-md-2 users-list">
                   {displayData.length > 0 ?  
                    <div>
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name <span></span></th>
                                    <th>Picture</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayData.map((user,i)=>{
                                    return (
                                        <tr key={user.email} onClick={()=>this.selectedUser(user)}>
                                            <td>{i + 1 + this.state.startIndex}</td>
                                            <td>{user.name.first + ' ' + user.name.last}</td>
                                            <td><img src={user.picture.thumbnail} alt="img-thumbnail" className="img-responsive"/></td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="pagination">
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
