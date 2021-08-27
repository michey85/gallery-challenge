import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {MediaSource, MediaCard} from 'entities/gallery';

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
                    return `media?${type ? `type=${type}&` : ''}${search ? `q=${search}` : ''}`;
                },
                providesTags: (result) => result ? [
                    ...result.map(({id}) => ({type: 'Media' as const, id})),
                    {type: 'Media', id: 'LIST'}
                ] : [{type: 'Media', id: 'LIST'}],
            }),
            fetchMediaByQuery: builder.query<MediaCard[], string | void>({
                query(search = '') {
                    return `/media?q=${search}`;
                }
            }),
            fetchMediaByType: builder.query<MediaCard[], MediaSource>({
                query(type = 'video') {
                    return `/media?type=${type}`;
                }
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
    useFetchMediaByQueryQuery,
    useFetchMediaByTypeQuery,
    useAddMediaMutation,
} = apiGallery;
