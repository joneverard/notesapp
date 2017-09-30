export const CREATE_NOTE = 'create';
export const FETCH_NOTES = 'fetch';
export const SELECT_NOTE = 'select';
export const CANCEL_NOTE = 'cancel';
export const TOGGLE_EDITOR = 'toggle';
export const EDIT_NOTE = 'edit';
export const DELETE_NOTE = 'delete';

export function createNote(note) {
    console.log(note);
    return {
        type: CREATE_NOTE,
        payload: note
    }
}

export function fetchNotes() {
    return {
        type: FETCH_NOTES,
        payload: 1
    }
}

export function selectNote(note) {
    console.log(note);
    return {
        type: SELECT_NOTE,
        payload: note
    }
}

export function toggleEditor(edit) {
    return {
        type: TOGGLE_EDITOR,
        payload: 1
    }
}

export function editNote(note) {
    console.log(note);
    return {
        type: EDIT_NOTE,
        payload: 'hey there'
    }
}

export function deleteNote(note) {
    console.log(note);
    return {
        type: DELETE_NOTE,
        payload: note
    }
}