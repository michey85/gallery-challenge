import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {MediaSource, MediaViewType} from 'entities/gallery';


interface GalleryConfig {
    search: string;
    type: '' | MediaSource;
    view: MediaViewType;
    modalViewSourceId: number | null;
}

const initialState: GalleryConfig = {
    search: '',
    type: '',
    view: 'table',
    modalViewSourceId: null,
}

const galleryConfigSlice = createSlice({
    name: 'gallery/config',
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        setType(state, action: PayloadAction<MediaSource | ''>) {
            state.type = action.payload;
        },
        setView(state, action: PayloadAction<MediaViewType>) {
            state.view = action.payload;
        },
        setModalViewSource(state, action: PayloadAction<number | null>) {
            state.modalViewSourceId = action.payload;
        }
    },
});

export const {
    setSearch,
    setType,
    setView,
    setModalViewSource,
} = galleryConfigSlice.actions;
export const galleryConfigReducer = galleryConfigSlice.reducer;

