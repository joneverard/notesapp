import React, { Component } from 'react';
import Ribbon from './ribbon';
import NoteList from '../containers/note_list';
import NoteFocus from './note_focus';
import MyEditor from '../containers/MyEditor';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.Notes;
    }

    componentDidMount() {
        // this.setState({selectedNote: this.state.notes[0]})
        this.setState(this.props.Notes);

    }

    searchNotes(term) {
        var searchResults = this.state.notes.filter((note) => {
            if (note.title.indexOf(term) !== -1 || note.content.indexOf(term) !== -1) {
                return note;
            }
        });
        this.setState({searchResults: searchResults, searchTerm: term});
    }

    createPost(state) {
        var ids = this.state.notes.map((note) => {return note.id});
        var newId = Math.max(...ids) + 1;
        var note = [{id: newId, title:state.title, content:state.content}];
        var newState = this.state.notes.concat(note);
        this.setState({notes: newState, createPost:false});
    }

    renderFocus() {
        if (this.props.displayEditor) {
            return <MyEditor Note={this.props.NoteEditor}/>;
        } else {
            return <NoteFocus Selected={this.props.Selected} />;
        };
    }

  render() {
    if (this.props.Notes.InitialState.searchTerm) {
        var displayNotes = this.state.searchResults;
    }  else {
        var displayNotes = this.state.notes;
    }

    return (
            <div style={{height: 'calc(100% - 10px)'}}>
                <div className="row">
                    <Ribbon
                        displayCreatePost={() => this.setState({createPost: true})}
                        searchNotes={(term) => this.searchNotes(term)} />
                </div>
                <div className="row content">
                    <div className="col-md-4 side-bar">
                        <NoteList notes={displayNotes} />
                    </div>
                    <div className="col-md-8">
                        {this.renderFocus()}
                    </div>
                </div>
            </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        Notes: state,
        Selected: state.SelectedNote,
        displayEditor: state.DisplayEditor,
        NoteEditor: state.NoteEditor
    }
}


export default connect(mapStateToProps)(App);


//submitNote={(state) => this.createPost(state) }