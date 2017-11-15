import { API_URL } from '../../constants';

export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
export const SET_CHARACTER_PROFILE = 'SET_CHARACTER_PROFILE';
export const SET_CHARACTER_WORLD = 'SET_CHARACTER_WORLD';
export const SET_CHARACTER_MOVIES = 'SET_CHARACTER_MOVIES';

// set character movies
export function setCharacterMovies(movies) {
    return {
        type: SET_CHARACTER_MOVIES,
        movies,
    };
}
// get character movie
export function getCharacterMovies(moviesUrls) {
    return dispatch =>
      Promise.all(moviesUrls.map(movieUrl =>
      fetch(movieUrl)
        .then(res => res.json())
      ))
      .then(movies =>
        dispatch(setCharacterMovies(movies))
      );
}
// set character world
export function setCharacterWorld(world) {
    return {
        type: SET_CHARACTER_WORLD,
        world,
    };
}
// get character world
export function getCharacterWorld(url) {
  return dispatch =>
    fetch(url)
      .then(res => res.json())
      .then(world =>
        dispatch(setCharacterWorld(world))
    );
}
// set character profile
export function setCharacterProfile(profile) {
    return {
        type: SET_CHARACTER_PROFILE,
        profile,
    };
}
// get character profile
export function getCharacterProfile(id) {
    return dispatch =>
      fetch(`${API_URL}/people/${id}`)
        .then(res => res.json())
        .then(profile => {
            dispatch(setCharacterProfile(profile));
            // get character homeworld from profile
            dispatch(getCharacterWorld(profile.homeworld));
            // get character movies from profile
            dispatch(getCharacterMovies(profile.films));
        });
}
// set character
export function setCurrentCharacter(id) {
    return {
        type: SET_CURRENT_CHARACTER,
        id,
    };
}