import 'draft-js/dist/Draft.css';
// import '../components/MyEditor.css';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';

import { createNote, toggleEditor, selectNote, saveNote } from '../actions/index';

/* Import the `basicTextStylePlugin` */
import basicTextStylePlugin from '../plugins/basicTextStylePlugin';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    // if (props.noteId) {
    //   var content = EditorState.createWithContent(props.content);
    // } else {
    //   var content = EditorState.createEmpty();
    // }

    // focus on getting notes created with ids first...
    // var noteId = this.generateId();

    this.state = {
      editorState: EditorState.createEmpty(),
      title: '',
      id: 0
    };


    /* Create an array of plugins to be passed to `Editor` */
    this.plugins = [
      basicTextStylePlugin,
    ];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    this.setState({
      editorState: EditorState.createWithContent(this.props.Note.content),
      title: this.props.Note.title,
      id: this.props.Note.id,
    })
  }

  // onChange = (editorState) => {
  //   console.log(this.state);
  //   this.setState({
  //     editorState
  //   });
  // }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }

  onTitleChange(title) {
    this.setState({title});

  }

  handleSubmit(e) {
    // bind an action creator to this.props...
    e.preventDefault();
    var n = {
      content: this.state.editorState.getCurrentContent(),
      title: this.state.title,
      id: this.state.id
    }
    if (this.props.Note.newNote) {
      this.props.createNote(n);
    } else {
      this.props.saveNote(n)
    }
    // this.props.createNote(n);
    this.props.toggleEditor();
    this.props.selectNote(n);
  }

  handleCancel (e) {
    e.preventDefault()
    this.props.toggleEditor();
  }

  // focus = () => {
  //   this.editor.focus();
  // }

  render() {
    const { editorState } = this.state;
    return (
      <div className="edit-main">
        <input
          className="title-input"
          type="text"
          value={this.state.title}
          onChange={(e) => {this.onTitleChange(e.target.value)}}
          placeholder="Note Title"
          >
        </input>
        <div className="editor">
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            plugins={this.plugins} // Pass the plugins to the Editor
            // ref={(element) => { this.editor = element; }}
            placeholder="Tell your story"
            spellCheck
          />
        </div>
        <br />
        <div className="edit-control">
          <button type="submit" onClick={(e) => this.handleSubmit(e)} className="btn">Save</button>
          <button onClick={(e) => this.handleCancel(e)} className="btn">Cancel</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createNote, toggleEditor, selectNote, saveNote }, dispatch);
};

export default connect(null, mapDispatchToProps)(MyEditor);