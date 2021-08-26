import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'http://localhost:3001';

type Source = 'image' | 'video' | 'audio';

interface MediaCard {
    id: number;
    type: Source;
    name: string;
    url: string;
    date: string;
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
            fetchMedia: builder.query<MediaCard[], void>({
                query() {
                    return `media`;
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
            fetchMediaByType: builder.query<MediaCard[], Source>({
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
