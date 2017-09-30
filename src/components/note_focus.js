import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editNote, deleteNote } from '../actions';

var old = function({Selected}) {
    if (!Selected) {
        return <div>Select a note to view</div>
    } else {
        console.log(Selected)
        console.log(Selected.content)
        return (
            <div className="focus">
                <h2 className="note-title">{Selected.title}</h2>
                <div className="note-ctrl">
                    <button className="btn edit-btn">edit</button>
                    <button className="btn delete-btn">del</button>
                </div>
                <p>{Selected.content.getPlainText()}</p>
            </div>
        )
    }
}

class NoteFocus extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    renderControls() {
        if(this.props.Selected.id != 0) {
            return (
                    <button
                        className="btn edit-btn"
                        onClick={() => {this.props.editNote(this.props.Selected)}}>
                        edit
                    </button>
                    <button
                        className="btn delete-btn"
                        onClick={() => {this.props.deleteNote(this.props.Selected)}}>
                        del
                    </button>
            )
        }
    }


    render() {
        if (!this.props.Selected) {
            return <div>Select a note to view.</div>;
        } else {
            return (
                <div className="focus">
                    <h2 className="note-title">{this.props.Selected.title}</h2>
                    <div className="note-ctrl">

                    </div>
                    <p>{this.props.Selected.content.getPlainText()}</p>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        Selected: state.SelectedNote
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ editNote, deleteNote }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteFocus);