import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {apiGallery} from 'shared/api/gallery';
import {galleryViewReducer} from 'features/gallery-view-select';
import {galleryFilterReducer} from 'features/gallery-filter';
import {galleryModalReducer} from 'entities/gallery/ui';

export const store = configureStore({
    reducer: {
        galleryView: galleryViewReducer,
        galleryFilter: galleryFilterReducer,
        galleryModal: galleryModalReducer,
        [apiGallery.reducerPath]: apiGallery.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiGallery.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
