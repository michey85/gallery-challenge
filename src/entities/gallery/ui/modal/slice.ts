import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface GalleryModalConfig {
    modalViewSourceId: number | null;
}

const initialState: GalleryModalConfig = {
    modalViewSourceId: null,
}

const galleryModalSlice = createSlice({
    name: 'gallery/modal',
    initialState,
    reducers: {
        setModalViewSource(state, action: PayloadAction<number | null>) {
            state.modalViewSourceId = action.payload;
        }
    },
});

export const {
    setModalViewSource,
} = galleryModalSlice.actions;
export const galleryModalReducer = galleryModalSlice.reducer;

