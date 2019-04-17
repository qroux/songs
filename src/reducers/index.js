import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs 1', duration: '4:01'},
    { title: 'No Scrubs 2', duration: '4:02'},
    { title: 'No Scrubs 3', duration: '4:03'},
    { title: 'No Scrubs 4', duration: '4:04'},
  ];
};


const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
