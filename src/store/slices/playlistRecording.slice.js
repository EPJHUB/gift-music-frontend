import { createSlice } from "@reduxjs/toolkit";

const playlistRecordingSlice = createSlice({
    name:"playlistRecording",
    initialState:{
        tracks: []
    },
    reducers:{
        addTrack: (state, action) => {
            const newTrack = action.payload;
            if(!state.tracks.find((track) => track.id === newTrack.id )){
                state.tracks.push(newTrack);
            }
            return state;
        },
        removeTrack: (state, action) => {
            const trackToRemove = action.payload;
            const trackIdx = state.tracks.findIndex((track) => track.id === trackToRemove.id);
            state.tracks.splice(trackIdx,1);
        },
        resetTracks: (state)=> {
            state.tracks = [];
        }

    }
})

export const {addTrack, removeTrack, resetTracks} = playlistRecordingSlice.actions;

export default playlistRecordingSlice.reducer;