import { createSlice } from "@reduxjs/toolkit";
import { OFF_CHAT_LIVE } from "./constant";

const chatSlice= createSlice({
    name: "chat",
     initialState:{
        messages:[],
     },
     reducers:{
        addMessage:(state, action) =>{
         state.messages.splice(OFF_CHAT_LIVE,1);
          state.messages.unshift(action.payload);
        },
     }

})
 export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;