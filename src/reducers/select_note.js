import { SELECT_NOTE, CANCEL_NOTE, DELETE_NOTE } from '../actions';
import { ContentState } from 'draft-js';

var _init = ContentState.createFromText(' ');
var init = {id:0, title:'', content:_init};

export default function SelectReducer(state = init, action) {
    switch (action.type) {
        case SELECT_NOTE:
            return action.payload;
        case DELETE_NOTE:
            return init;
        case CANCEL_NOTE:
            return null;
        default:
            return state;
        }
};