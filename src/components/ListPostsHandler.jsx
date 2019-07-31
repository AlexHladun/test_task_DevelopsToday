import ListPosts from './ListPosts';
import {connect} from 'react-redux';
import {deselectItem, load} from '../redux/actions';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    selectedItemIndex: state.selectedItemIndex,
    editedPost: state.editedPost,
    editing: state.editing,
    requested: state.requested
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch(load()),
    deselectItem: () => dispatch(deselectItem())
  }
}

const ListPostsHandler = connect(mapStateToProps, mapDispatchToProps)(ListPosts);

export default ListPostsHandler;