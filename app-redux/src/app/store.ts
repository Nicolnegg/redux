import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import headerReducer from "../features/header/headerSlice"
import footerReducer from '../features/footer/footerSlice'; 
import titleReducer from '../features/title/titleSlice';
import carouselReducer from '../features/carousel/carouselSlice';


export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    header: headerReducer,
    footer: footerReducer, 
    title: titleReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
