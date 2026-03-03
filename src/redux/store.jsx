import { configureStore } from "@reduxjs/toolkit";
import searchSlice from '../redux/features/SearchSlice'
import collectionSlice from '../redux/features/CollectionSlice'
export const store = configureStore({
    reducer:{
        search : searchSlice,
        collection : collectionSlice
    }
})