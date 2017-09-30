import { EDIT_NOTE, CREATE_NOTE, NEW_NOTE } from '../actions';
import { ContentState } from 'draft-js';

export default function EditorReducer(state={}, action) {
    switch (action.type) {
        case EDIT_NOTE:
            return action.payload;
        case NEW_NOTE:
            return action.payload;
        default:
            return state;
    }
}