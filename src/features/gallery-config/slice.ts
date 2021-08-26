import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Source, ViewTypes} from 'types';


interface GalleryConfig {
    search: string;
    type: '' | Source;
    view: ViewTypes;
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
        setType(state, action: PayloadAction<Source | ''>) {
            state.type = action.payload;
        },
        setView(state, action: PayloadAction<ViewTypes>) {
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
export default galleryConfigSlice.reducer;