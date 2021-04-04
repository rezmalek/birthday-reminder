import React from 'react';

const List = (props) => {
  
  const remove = (id) => {
    props.handleRemove(id)
  }

  const arr = props.people;
  
  return (
    <>
      {arr.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div className='items'>
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <button className='btn' onClick={()=> remove(id)}>Remove</button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
