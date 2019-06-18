import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scubs", duration: "4:05" },
    { title: "Macarena", duration: "2:15" },
    { title: "All Stare", duration: "4:25" },
    { title: "Smells like Teen Spirit", duration: "7:05" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
