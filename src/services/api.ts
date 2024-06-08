import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    // pega todos os restaurantes da api, sem filtro
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => ''
    })
  })
})

export const { useGetRestaurantsQuery } = api

export default api
