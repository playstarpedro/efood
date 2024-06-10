import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    // pega todos os restaurantes da api, sem filtro
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => ''
    }),
    // pegando restaurantes filtrados pelo id
    getRestaurantId1: builder.query<Restaurant, void>({
      query: () => '1'
    }),
    getRestaurantId2: builder.query<Restaurant, void>({
      query: () => '2'
    }),
    getRestaurantId3: builder.query<Restaurant, void>({
      query: () => '3'
    }),
    getRestaurantId4: builder.query<Restaurant, void>({
      query: () => '4'
    }),
    getRestaurantId5: builder.query<Restaurant, void>({
      query: () => '5'
    }),
    getRestaurantId6: builder.query<Restaurant, void>({
      query: () => '6'
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantId1Query,
  useGetRestaurantId2Query,
  useGetRestaurantId3Query,
  useGetRestaurantId4Query,
  useGetRestaurantId5Query,
  useGetRestaurantId6Query
} = api

export default api
