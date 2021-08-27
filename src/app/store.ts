import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import {apiGallery} from 'shared/api/gallery';
import {galleryConfigReducer} from 'features/gallery-mode';

export const store = configureStore({
    reducer: {
        galleryConfig: galleryConfigReducer,
        [apiGallery.reducerPath]: apiGallery.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiGallery.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
