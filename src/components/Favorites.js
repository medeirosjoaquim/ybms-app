import React from 'react';
import UnderC from '../assets/underconstruction.jpg'
const Favorites = () => {

  return (
    <div>
      <h4>Hang in there! We're still workin</h4>
      <h5>by now, let's get a little 90's</h5>
      <img src={UnderC} alt="under construction" />
      <p>
        I should be sleeping. Im feeling sick, hope it's not pneumonia. But I had to keep going. Like that guy used to say: "It's now or never"
      </p>
      <p>Notes: It was a mistake to use redux-saga. It's overengineering. I tried to use my old boiler plate and follow things I learned in the past month. Well,
        turns out people were doing wrong were I was.
      </p>
      <p>If I had more time I would focus on writing tests. Now that the movie-details is almost done it would
        be quick to do the same for series and later apply
        the pattern to the lists (movies and series)...
      </p>
      <p>
        The favorites would be a catch. I would really use localStorage (ask me why)...Well, so long and thanks for all the fish.
      </p>
    </div>
  );
}

export default Favorites;
