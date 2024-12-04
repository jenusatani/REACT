import { configureStore } from "@reduxjs/toolkit";
import  List  from "../Configure/Apislice";

export const store = configureStore({
    reducer:{
        dataKey: List
    }
})