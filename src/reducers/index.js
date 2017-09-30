import { combineReducers, createStore } from 'redux';
import NotesReducer from './note_reducer';
import InitialState from './initial_state';
import SelectReducer from './select_note';
import DisplayEditorReducer from './display_editor_reducer';


const rootReducer = combineReducers({
  NotesReducer: NotesReducer,
  InitialState: InitialState,
  SelectedNote: SelectReducer,
  DisplayEditor: DisplayEditorReducer
});


export default rootReducer;


// const rootReducer = combineReducers({
//   todos: todos,
//   visibilityFilter: visibilityFilter
// });

// const initialState = {
//   todos: [{id:123, text:'hello', completed: false}]
// };

// const store = createStore(
//   rootReducer,
//   initialState
// );