import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleEditor, newNote, searchNotes } from '../actions/index';


class Ribbon extends Component {
    // set constructor since we need an initial state to work with.
    constructor(props) {
        super(props)
        this.state = {
            term: '',
        }
    }


    onInputChange(term) {
        this.setState({term: term});
        // this.props.searchNotes(term);
    }

    createNewNote() {
        this.props.toggleEditor();
        this.props.newNote();
    }


    render() {
        return (
            <div className="ribbon">
            <button className="btn btn-primary" onClick={() => {this.createNewNote()}}>Add Note</button>
            <p>Search Notes:</p>
            <input
                value={this.state.term}
                onChange={(e) => this.onInputChange(e.target.value)} />
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleEditor, newNote, searchNotes }, dispatch);
};


export default connect(null, mapDispatchToProps)(Ribbon)