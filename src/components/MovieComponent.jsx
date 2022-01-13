import React, { Component } from 'react';

class MovieComponent extends Component {
    render() { 
        return (
            <React.Fragment>
                <td scope="row">{this.props.title}</td>
                <td>{this.props.genre}</td>
                <td>{this.props.stock}</td>
                <td>{this.props.rate}</td>
                <td><button onClick={() => this.props.handleDelete(this.props.id)} className="btn btn-danger btn-sm">Delete</button></td>
            </React.Fragment>
        );
    }
}
export default MovieComponent;