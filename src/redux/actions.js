export const LOAD = 'load';
export const DISPLAY = 'display'
export const SELECT_ITEM = 'select_item';
export const DESELECT_ITEM = 'deselect_item';
export const DELETE_ITEM = 'delete_item';
export const EDIT_ITEM = 'edit_item';
export const UPDATE_EDITED_ITEM = 'update_edited_item';
export const CANCEL_EDITING = 'cancel_editing';
export const UPDATE_ITEM = 'update_item';

export function load() {
  return (dispatch) => {
    dispatch({
      type: LOAD
    });
   fetch('https://simple-blog-api.crew.red/posts')
    .then(response => response.json())
    .then(data => data)
    .then((posts) => {
      dispatch(display(posts))
    })
  }
}
export function display(posts) {
  return {
    type: DISPLAY,
    posts
  };
}
export function selectItem(selectedItemIndex) {
  return {
    type: SELECT_ITEM,
    selectedItemIndex,
  };
}
export function deselectItem() {
  return {
    type: DESELECT_ITEM,
  };
}
export function deleteItem(itemIndex) {
  return {
    type: DELETE_ITEM,
    itemIndex,
  };
}
export function editItem() {
  return {
    type: EDIT_ITEM,
  };
}
export function updateEditedItem(editedPost) {
  return {
    type: UPDATE_EDITED_ITEM,
    editedPost,
  };
}
export function cancelEditing() {
  return {
    type: CANCEL_EDITING,
  };
}
export function updateItem() {
  return {
    type: UPDATE_ITEM,
  };
}