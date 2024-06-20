import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    adress: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

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
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'https://fake-api-tau.vercel.app/api/efood/checkout',
        method: 'POST',
        body: body
      })
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
  useGetRestaurantId6Query,
  usePurchaseMutation
} = api

export default api
