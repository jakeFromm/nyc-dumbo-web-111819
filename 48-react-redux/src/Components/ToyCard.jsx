import React from 'react';
import {connect} from 'react-redux'
import {likeToy} from '../Redux/actions'

const ToyCard = ( props ) => {

  let {name, image, likes, id} = props.toy

  const handleLike = () => {
    // fetch()
    // .then()
    // .then(() => {
      props.likeToy(id);
    // })
  }


  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} className="toy-avatar" alt={name}/>
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {'<3'}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}


export default connect(null, {likeToy})(ToyCard);
