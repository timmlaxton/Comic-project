import React from 'react';

const ComicDetail = ({comic}) =>{
  if(!comic) return null;
  return (
    <div>
    <h3> {comic.name}</h3>
    </div>
  );
};

export default ComicDetail;
