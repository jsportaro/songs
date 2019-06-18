//  This is an example of a "named export"
//  To import, you'd write someting like
//  import { selectSong } from 'actions'
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
};