import React from 'react';
import CharacterList from './CharacterList';
import CharacterProfile from './CharacterProfile';
import CharacterWorld from './CharacterWorld';
import CharacterMovies from './CharacterMovies';
import CharacterSpecies from './CharacterSpecies';

const App = () =>
  <div className="container">
    <div className="row">
      <CharacterList />
      <CharacterProfile />
    </div>
    <div className="row">
      <CharacterWorld />
      <CharacterSpecies />
    </div>
    <div className="row">
      <CharacterMovies />
    </div>
  </div>;

  export default App;