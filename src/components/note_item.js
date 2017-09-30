import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNote } from '../actions/index';

// pull off the note object and the function select note..
// pass in props - > here we take off note and onNoteSelect to pass into the item.
// onNoteSelect gets passed down from the list, which the list receives from the app.

const old = function(props) {
    const classNames = `list-group-item note-item ${props.styleProps}`
    return (
        <li className={classNames} onClick={() => {props.selectNote(props.note)}}>
            <h5>{props.note.title}</h5>
        </li>
    )
}


class NoteListItem extends Component {
    render() {
        const classNames = `list-group-item note-item ${this.props.styleProps}`
        return (
            <li
                className={classNames}
                onClick={() => {this.props.selectNote(this.props.note)}}
                >
                <h5>{this.props.note.title}</h5>
            </li>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectNote: selectNote}, dispatch);
}


export default connect(null, mapDispatchToProps)(NoteListItem);