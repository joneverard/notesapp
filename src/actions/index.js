import { ContentState } from 'draft-js';


export const CREATE_NOTE = 'create';
export const FETCH_NOTES = 'fetch';
export const SELECT_NOTE = 'select';
export const CANCEL_NOTE = 'cancel';
export const TOGGLE_EDITOR = 'toggle';
export const EDIT_NOTE = 'edit';
export const DELETE_NOTE = 'delete';
export const NEW_NOTE = 'new';
export const SAVE_NOTE = 'save';


export function createNote(note) {
    return {
        type: CREATE_NOTE,
        payload: note
    }
}

export function saveNote(note) {
    return {
        type: SAVE_NOTE,
        payload: note
    }
}

export function newNote() {
    const id = generateId();
    const init = {id: id, title:'', content:ContentState.createFromText(' '), newNote:true}
    return {
        type: NEW_NOTE,
        payload: init
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

export function toggleEditor() {
    return {
        type: TOGGLE_EDITOR,
        payload: 1
    }
}

export function editNote(note) {
    // note['newNote'] = false
    return {
        type: EDIT_NOTE,
        payload: note
    }
}

export function deleteNote(note) {
    console.log(note);
    return {
        type: DELETE_NOTE,
        payload: note
    }
}


function generateId() {
    var d = new Date()
    var shuffle = d.valueOf().toString().split('').sort(function(){return 0.5-Math.random()}).join('');
    return shuffle;
  }