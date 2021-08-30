import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {MediaViewType} from 'entities/gallery';

export interface GalleryViewSelector {
    view: MediaViewType;
}

const initialState: GalleryViewSelector = {
    view: 'table',
}

const galleryViewSlice = createSlice({
    name: 'gallery/viewMode',
    initialState,
    reducers: {
        setView(state, action: PayloadAction<MediaViewType>) {
            state.view = action.payload;
        },
    }
})

export const {
    setView,
} = galleryViewSlice.actions;
export const galleryViewReducer = galleryViewSlice.reducer;
