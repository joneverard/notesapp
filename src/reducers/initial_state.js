import { ContentState } from 'draft-js';

export default function() {
    var one = ContentState.createFromText('hello world');
    var two = ContentState.createFromText('yolo swagging is here.');
    var three = ContentState.createFromText('testing testing testing');
    var init = ContentState.createFromText('hello testing testing');


// some stuff is still used in here for now ...
// once the search functionality is completed this can be deleted!
    return {
            NotesState: {
                notes: [
                {id: 1, title: 'hello', content:one},
                {id: 2, title: 'yello', content:two},
                {id: 3, title: 'onetwoonetwo', content:three}
            ],
            searchResults: [],
            selectedNote: init,
            createPost: false,
            searchTerm: ''
        }
    }
}