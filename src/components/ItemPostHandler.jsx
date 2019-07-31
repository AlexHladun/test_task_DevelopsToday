import {connect} from 'react-redux';
import ItemPost from './ItemPost';
import {cancelEditing,
  deleteItem,
  editItem,
  selectItem,
  updateEditedItem,
  updateItem} from '../redux/actions';

function mapStateToProps(state, ownProps) {
  const selected = state.selectedItemIndex === ownProps.postIndex;
  const editable = state.editing && state.selectedItemIndex === ownProps.postIndex;
  return {
    title: ownProps.title,
    date: ownProps.date,
    body: ownProps.body,
    creator: ownProps.creator,
    postIndex: ownProps.postIndex,
    selected: selected,
    editable: editable,
    editedPost: editable ? state.editedPost : null
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    selectItem: () => dispatch(selectItem(ownProps.postIndex)),
    deleteItem: () => dispatch(deleteItem(ownProps.postIndex)),
    editItem: () => dispatch(editItem()),
    updateEditedItem: editedPost => dispatch(updateEditedItem(editedPost)),
    cancelEditing: () => dispatch(cancelEditing()),
    updateItem: () => dispatch(updateItem()),
  }
}

const ItemPostHandler = connect(mapStateToProps, mapDispatchToProps)(ItemPost);

export default ItemPostHandler;