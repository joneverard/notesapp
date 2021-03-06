// import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
// import constants up here...
import _ from 'lodash';
import { CREATE_POST, FETCH_NOTES, CREATE_NOTE, DELETE_NOTE, SAVE_NOTE, SEARCH_NOTES } from '../actions';
import { ContentState } from 'draft-js';

var one = ContentState.createFromText('hello world');
var two = ContentState.createFromText('yolo swagging is here.');
var three = ContentState.createFromText('testing testing testing');
var init = ContentState.createFromText(' ');


const initialState = [
                {id: 1, title: 'hello', content:one},
                {id: 2, title: 'yello', content:two},
                {id: 3, title: 'onetwoonetwo', content:three}
            ]


export default function NotesReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_NOTES:
            return state;
        case CREATE_NOTE:
            const raw_content = action.payload.content;
            // const title_string = raw_content.getPlainText().slice(0,25);
            const new_note = {
                id: action.payload.id,
                title: action.payload.title,
                content: raw_content,
                wholeState: action.payload
            }
            console.log(state);
            return [...state, new_note]

        case SAVE_NOTE:
            var arr = [...state];
            var newArr = removeByAttr(arr, 'id', action.payload.id); // this is bad. should've used an object as the data structure.
            return [action.payload, ...newArr];

        case DELETE_NOTE:
            var arr = [...state];
            var newState = removeByAttr(arr, 'id', action.payload.id);
            console.log(newState);
            return newState;

        case SEARCH_NOTES:
            console.log(state);
            const arr = [...state];
            var newState = arr.filter((note) => {
                if (note.title.indexOf(action.payload) !== -1 || note.title.indexOf(action.payload) !== -1) {
                    return note;
                }
            });
            if (action.payload.length == 0) {
                return initialState;
            } else if (action.payload.length > 0) {
                return newState
            }
        default:
            return state;
    }
};


function removeByAttr (arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i]
           && arr[i].hasOwnProperty(attr)
           && (arguments.length > 2 && arr[i][attr] === value ) ){

           arr.splice(i,1);

       }
    }
    return arr;
}

function popByAttr (arr, attr, value)  {
    var i = arr.length;
    while(i--){
       if( arr[i]
           && arr[i].hasOwnProperty(attr)
           && (arguments.length > 2 && arr[i][attr] === value ) ){

           return arr[i];

       }
    }
    return arr;
}

        // case CREATE_POST:
        //     return [...state, action.payload.data]

//         case FETCH_POSTS:
//             return _.mapKeys(action.payload.data, 'id');
//         case FETCH_POST:
//             // const post = action.payload.data;
//             // const newState =  { ...state  };
//             // newState[post.id] = post;
//             // return newState;

//             return { ...state, [action.payload.data.id]: action.payload.data}
//         case DELETE_POST:
//             return _.omit(state, action.payload)
//         default:
//             return state;
//     }
// }