const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
let initialState = {
    posts: [
        { id: 2, message: 'hi', likesCount: 23 },
        { id: 3, message: 'hi33', likesCount: 3 },
        { id: 4, message: 'hieee', likesCount: 24 },
        { id: 6, message: 'hiefdq', likesCount: 2 },
    ],
    newPostText: ''
}

export default function profileReducer(state = initialState, action) {
    // debugger;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                message: state.newPostText,
                likesCount: 123
            }

            if (newPost.message.length > 0) {
                state.posts.push(newPost)
            }

            state.newPostText = ''
            console.log(ADD_POST)
            console.log(state)
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            console.log(UPDATE_NEW_POST_TEXT)
            console.log(state)
            return state;
        default:
            console.log('state++')
            console.log(state)
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostText = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText })