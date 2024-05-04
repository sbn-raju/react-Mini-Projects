import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const userApiAuth = createApi({
    reducerPath:"userAuthApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/"
    }),
    endpoints:(builder)=>({
        userRegister :builder.mutation({
            query:(userInput)=>({
                url:"register",
                methods : "POST"  ,  
                body : userInput
            })
        })
    })
});

export const {useUserRegisterMutation} = userApiAuth
export default userApiAuth.reducer