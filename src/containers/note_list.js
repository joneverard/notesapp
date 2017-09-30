import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteListItem from '../components/note_item';
import { bindActionCreators } from 'redux';
import { selectNote } from '../actions/index';

class NoteList extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentWillMount() {

    }

    renderNotes(note) {
        return (
                <NoteListItem
                    key={note.id}
                    note={note}
                    />
        )
    }

    render() {
        return (
            <ul className="note-list list-group">
                {this.props.notes.map(this.renderNotes)};
            </ul>
        )
    }
}


function mapStateToProps(state) {
    return {notes: state.NotesReducer}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectNote: selectNote }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);



    // constructor(props) {
    //     super(props);
    //     console.log(this.props);
    //     this.mapNotes = this.mapNotes.bind(this);
    // }

    // componentDidMount() {
    //     this.props.fetchNotes();
    // }

    // mapNotes(note) {
    //             return (
    //                 <NoteListItem
    //                 key={note.id}
    //                 onNoteSelect={props.onNoteSelect}
    //                 note={note}
    //                 styleProps={className}
    //                 />
    //             )
    //         }

    // renderNotes() {
    //     var items = this.props.notes.notes.map(this.mapNotes.bind(this));
    //     return items;
    // }

    // render() {
    //     return (
    //         <ul className="list-group col-md-4 side-bar">
    //             {this.renderNotes()}
    //         </ul>
    //     )
    // }

    //                     onNoteSelect={this.props.onNoteSelect}