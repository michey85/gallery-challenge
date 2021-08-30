import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {MediaSource} from 'entities/gallery';


export interface GallerySearchFilter {
    search: string;
    type: '' | MediaSource;
}

const initialState: GallerySearchFilter = {
    search: '',
    type: '',
}

const galleryFilterSlice = createSlice({
    name: 'gallery/filter',
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        setType(state, action: PayloadAction<MediaSource | ''>) {
            state.type = action.payload;
        },
    }
});

export const {
    setSearch,
    setType,
} = galleryFilterSlice.actions;
export const galleryFilterReducer = galleryFilterSlice.reducer;
