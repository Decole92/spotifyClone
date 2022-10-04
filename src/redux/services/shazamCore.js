import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




    export const shazamCoreApi =  createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'ff573c3803msh318cd232dd4b71ap1e0dbdjsnad3c715eeb6b');

            return headers;
        },
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
        getSongDetails: builder.query({ query: ({songid}) => `/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({ query: ({songid}) =>  `/tracks/related?track_id=${songid}`}),
        getArtistsDetails: builder.query({ query: ({artistId}) => `/artists/details?artist_id=${artistId}`}),
        getSongsByCountry: builder.query({ query: (countryCode) =>  `/charts/country?country_code=${countryCode}`}),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),

     }),

    });

    export const {
   
        useGetTopChartsQuery,
        useGetSongsByGenreQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistsDetailsQuery,
        useGetSongsByCountryQuery,
        useGetSongsBySearchQuery,


         }  = shazamCoreApi;