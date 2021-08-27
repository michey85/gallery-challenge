import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {MediaSource, MediaViewType} from 'entities/gallery';


interface GalleryConfig {
    search: string;
    type: '' | MediaSource;
    view: MediaViewType;
    isUploading: boolean;
    modalViewSourceId: number | null;
}

const initialState: GalleryConfig = {
    search: '',
    type: '',
    view: 'table',
    isUploading: false,
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
        setUploading(state, action: PayloadAction<boolean>) {
            state.isUploading = action.payload;
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
    setUploading,
    setModalViewSource,
} = galleryConfigSlice.actions;
export const galleryConfigReducer = galleryConfigSlice.reducer;