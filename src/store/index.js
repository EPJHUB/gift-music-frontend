import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import playlistRecordingSlice from "./slices/playlistRecording.slice";

export default configureStore({
    reducer: {
        user: userSlice,
        playlistRecording: playlistRecordingSlice
    },
})