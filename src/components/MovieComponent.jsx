import React, { Component } from 'react';

class MovieComponent extends Component {
    render() { 
        return (
            <React.Fragment>
                <td scope="row">{this.props.title}</td>
                <td>{this.props.genre}</td>
                <td>{this.props.stock}</td>
                <td>{this.props.rate}</td>
                <td><a onClick={() => this.props.onFavorite(this.props.id)} className="btn btn-outline-none"><i style={{color:'blue'}} className={this.setIconClass()}></i></a></td>
                <td><button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm">Delete</button></td>
            </React.Fragment>
        );
    }

    setIconClass = () =>{
        let classNames = this.props.fav === true? "fa fa-lg fa-heart" : "fa fa-lg fa-heart-o";
        return classNames;
    }
}
export default MovieComponent;