import React from 'react';

const ComicSelector = (props) => {
  const options = props.comics.map((comic, index) =>{
    return(
      <option value={index} key={index}>
      {comic.name}
      </option>
    )

  });

  function handleChange(event){
    props.onComicSelected(event.target.value);
  }

  return (
    <select
    id="comic-selector" defaultValue="default"
    onChange={handleChange}>

    <option disabled value="default">
    Choose a character...
    </option>
    {options}
    </select>

  );
};

  export default ComicSelector;
