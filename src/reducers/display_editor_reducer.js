import { TOGGLE_EDITOR } from '../actions';

export default function toggleEditor(state = false, action) {
    switch (action.type) {
        case TOGGLE_EDITOR:
            if (!state) {
                return true
            } else if (state) {
                return false
            }
        default:
            return state;
        }
};