import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: null,
    }, 
    reducers: {
        login: (state, action) =>{
            state.value = action.payload
        }, 

        logout:(state, action) =>{
            state.user = null //..set user to null when logout

        }
    }
})

export const {login, logout} = userSlice.actions

    //...this selector allows us to pull users
     export const selectUser =(state) => state.user.user
    
     export default userSlice.reducer