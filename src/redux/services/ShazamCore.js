/* eslint-disable import/no-unresolved */
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {VITE_SHAZAM_CORE_RAPID_API_KEY} from '@env';

export const ShazamCoreApi = createApi({
  reducerPath: 'ShazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.shazam.com/',
    // baseUrl: 'https://shazam-core.p.rapidapi.com/',
    // prepareHeaders: headers => {
    //   headers.set('X-RapidAPI-Key', VITE_SHAZAM_CORE_RAPID_API_KEY);

    //   return headers;
    // },
  }),

  endpoints: builder => ({
    getTopCharts: builder.query({
      query: ({listid, limitCount}) =>
        `services/amapi/v1/catalog/MY/playlists/${listid}/tracks?limit=${limitCount}&l=en-US&relate[songs]=artists,music-videos`,
    }),

    getSongDetails: builder.query({
      query: songid => `v1/tracks/details?track_id=${songid}`,
    }),

    getSongRelated: builder.query({
      query: songid => `v1/tracks/related?track_id=${songid}`,
    }),

    getArtistDetails: builder.query({
      query: artistId => `v2/artists/details?artist_id=${artistId}`,
    }),

    getSongsByCountry: builder.query({
      query: countryCode => `v1/charts/country?country_code=${countryCode}`,
    }),

    getSongsByGenre: builder.query({
      query: genre => `v1/charts/genre-world?genre_code=${genre}`,
    }),

    getSongsBySearch: builder.query({
      query: searchTerm =>
        `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = ShazamCoreApi;
