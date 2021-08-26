import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {apiGallery} from 'features/gallery';

export const store = configureStore({
    reducer: {
        [apiGallery.reducerPath]: apiGallery.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiGallery.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
