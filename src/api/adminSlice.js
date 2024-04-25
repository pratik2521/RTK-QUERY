import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creating an API slice named "adminAPI"
export const adminAPI = createApi({
  reducerPath: "admin", // Name for the slice
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }), // Base URL for API requests
  endpoints: (builder) => ({
    // Define an endpoint named "getAccount"
    getAccount: builder.query({
      query: () => "account", // Query function to fetch the account data
      transformResponse:(reponse)=>reponse.sort((a,b)=>b.amount-a.amount), // reponse ko apne hisab se bana skte hai 
      providesTags: ["account"],
    }),
    addAccount: builder.mutation({
      query: (amount, id) => ({
        url: "account",
        method: "POST",
        body: { amount, id },
      }), 
      invalidatesTags: ["account"],
    }),
    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `account/${id}`,
        method: "DELETE",
        // body: { amount, id },
      }), 
      invalidatesTags: ["account"],
    }),
    updateAccount: builder.mutation({
      query: ({id, amount}) => ({
        url: `account/${id}`,
        method: "PUT",
        body: { amount },
      }), 
      invalidatesTags: ["account"],
    }),
  }),
});

// Exporting the generated hooks for accessing the "getAccount" endpoint
export const {
  useGetAccountQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = adminAPI;
