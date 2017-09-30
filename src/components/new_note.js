import React, { Component } from 'react';
import MyEditor from './MyEditor';
import { connect } from 'react-redux';
import { saveNote } from '../actions/index';
import { bindActionCreators } from 'redux';


class NewNote extends Component {
    constructor(props) {
        super(props)
    }

    // handle submit needs to call an action creator.
    // action creator takes the editor state as its payload and passes it through reducers.
    // the editor state then ends up in the redux store.
    // action creator is linked by using connect()()
    handleSubmit(e) {
        e.preventDefault();
        this.props.saveNote(this.state);
    }


    render() {
        return (
            <div className="col-md-8">
                <MyEditor />
                <div onClick={() => this.handleSubmit()}>click me
                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({saveNote: saveNote}, dispatch);
}

export default connect(null, mapDispatchToProps)(NewNote);



