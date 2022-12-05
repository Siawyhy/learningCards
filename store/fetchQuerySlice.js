import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://siawyhyyy.asuscomm.com:3001' }),
    tagTypes: ['Card'],
    endpoints: builder => ({
        getCards: builder.query({
            query: () => '/cards',
            providesTags: ['Card'] 
        }),
        deleteCard: builder.mutation ({
            query: id => ({
                url: `/cards/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Card']
        }),
        addCard: builder.mutation({
            query: card => ({
                url: '/cards',
                method: 'POST',
                body: card
            }),
            invalidatesTags: ['Card']
        }),
        changeCard: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `cards/${id}`,
                method: 'PATCH',
                body: patch,
            }), 
            invalidatesTags: ['Card']
        })
    })
}) 

export const {useGetCardsQuery, useDeleteCardMutation, useAddCardMutation, useChangeCardMutation} = apiSlice;
