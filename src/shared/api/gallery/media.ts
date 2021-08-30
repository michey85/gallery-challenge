import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {MediaCard} from 'entities/gallery';

import {API_BASE_URL} from 'shared/config';


interface FetchConfig {
    search?: string;
    type?: string;
}

export const apiGallery = createApi({
    reducerPath: 'gallery',
    tagTypes: ['Media'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders(headers) {
            // headers.set('Authorisation', 'OUR API KEY')

            return headers;
        }
    }),
    endpoints(builder) {
        return {
            fetchMedia: builder.query<MediaCard[], FetchConfig | void>({
                query({search = '', type = ''} = {}) {
                    return `media?_sort=id&_order=desc&${type ? `type=${type}&` : ''}${search ? `q=${search}` : ''}`;
                },
                providesTags: (result) => result ? [
                    ...result.map(({id}) => ({type: 'Media' as const, id})),
                    {type: 'Media', id: 'LIST'}
                ] : [{type: 'Media', id: 'LIST'}],
            }),
            addMedia: builder.mutation<MediaCard, Partial<MediaCard>>({
                query(body) {
                    return {
                        url: `/media`,
                        method: 'POST',
                        body,
                    }
                },
                invalidatesTags: [{type: 'Media', id: 'LIST'}],
            }),
        }
    }
});

export const {
    useFetchMediaQuery,
    useAddMediaMutation,
} = apiGallery;
