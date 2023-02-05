import { configureStore } from "@reduxjs/toolkit";
import { clicks } from '../reducers/clicks'


export const store = configureStore({
    reducer: {
        clicks: clicks,
    },
});