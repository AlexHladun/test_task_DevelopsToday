import React from 'react';
import '../ItemPost.css';
function ItemPost(props) {
  return (
    <article className={props.selected ? 'selected' : ''}>
      {
        props.editable
          ?<input type='text' value={props.editedPost.body}
                   onChange={(event) => props.updateEditedItem(event.target.value)}
                   onKeyDown={(event) => {
                      if(event.key === 'Enter'){
                        props.updateItem();
                      } else if (event.key === 'Escape') {
                        props.cancelEditing();
                      }
                    }}
          />
          : <div className='post' onClick={props.selectItem}>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <div>date:{props.date}</div>
            <div>creator:{props.creator}</div>
          </div>
        }
      <button className="show-selected-item" onClick={props.editItem}>&#9997;</button>
      <button onClick={props.deleteItem}>&times;</button>
     </article>
  );
}

export default ItemPost;
