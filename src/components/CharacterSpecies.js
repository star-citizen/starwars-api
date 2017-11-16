import React from 'react';
import { connect } from 'react-redux';

// if 'n/a' don't display
const isKnown = text => text && text !== 'n/a';

const CharacterSpecies = ({ species }) =>
  <div id='character-species' className='col-md-6'>
    <h1>Species</h1>
    {isKnown(species.name) && <p>Name: {species.name}</p>}
    {isKnown(species.classification) && <p>Class: {species.classification}</p>}
    {isKnown(species.designation) && <p>Designation: {species.designation}</p>}
    {isKnown(species.average_height) && <p>Average Height: {species.average_height}</p>}
    {isKnown(species.skin_colors) && <p>Skin Colors: {species.skin_colors}</p>}
    {isKnown(species.hair_colors) && <p>Hair Colors: {species.hair_colors}</p>}
    {isKnown(species.eye_colors) && <p>Eye Colors: {species.eye_colors}</p>}
    {isKnown(species.average_lifespan) && <p>Average Lifespan: {species.average_lifespan}</p>}
    {isKnown(species.language) && <p>Language: {species.language}</p>}
  </div>

  const mapStateToProps = ({ character: { species } }) => ({
      species,
  });

  export default connect(mapStateToProps)(CharacterSpecies);