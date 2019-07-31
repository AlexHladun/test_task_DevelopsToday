import {
  LOAD, 
  DISPLAY,
  SELECT_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  DESELECT_ITEM,
  UPDATE_EDITED_ITEM,
  CANCEL_EDITING,
  UPDATE_ITEM,
} from './actions';

const initialState = {
  posts: null,
  selectedItemIndex: null,
  editedPost: null,
  editing: null,
  requested: false
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        requested: true
      }
    case DISPLAY: 
      return {
        ...state,
        posts: action.posts,
        editing: false
      }
    case SELECT_ITEM:
      if (state.editing) {
        return state;
      } else {
        return {
        ...state,
        selectedItemIndex: action.selectedItemIndex,
      };
    }
    case DESELECT_ITEM:
      if (state.editing) {
        return state;
      }
      return {
        ...state,
        selectedItemIndex: null,
      };

    case DELETE_ITEM:
      let newSelectedItemIndex;
      if (state.selectedItemIndex === action.itemIndex) {
        newSelectedItemIndex = null;
      } else if (state.selectedItemIndex > action.itemIndex) {
        newSelectedItemIndex = state.selectedItemIndex - 1;
      } else {
        newSelectedItemIndex = state.selectedItemIndex;
      }
      return {
        ...state,
        posts: state.posts.filter((item, index) => index !== action.itemIndex),
        selectedItemIndex: newSelectedItemIndex,
        editedPost:
          state.selectedItemIndex === action.itemIndex
            ? null
            : state.editedPost,
        editing:
          state.selectedItemIndex === action.itemIndex ? false : state.editing,
      };
    case EDIT_ITEM:
      return {
        ...state,
        editing: true,
        editedPost: state.posts[state.selectedItemIndex],
      };
    case UPDATE_EDITED_ITEM:
      return {
        ...state,
        editedPost: action.editedPost,
      };
    case CANCEL_EDITING:
      return {
        ...state,
        editing: false,
        editedPost: null,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        posts: state.posts.map((item, index) => {
          if (index !== state.selectedItemIndex) {
            return item;
          } else {
            return state.editedPost;
          }
        }),
        editing: false,
        editedPost: null,
      };
    default:
      return state;
  }
}
