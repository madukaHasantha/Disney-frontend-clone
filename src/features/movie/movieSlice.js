
import { createSlice } from "@reduxjs/toolkit" //imports the createSlice function from the Redux Toolkit library

const initialState = {

    movies: [] //array is initially empty
}

const movieSlice = createSlice({   // creates a Redux slice

    name: "movie", //field identifies the name of the slice
    initialState,  //The initial state object defined earlier is provided as the initial state for this slice

    reducers: {

        setMovies: (state, action) =>{    //When this reducer is dispatched, it receives the current state and an action object. It updates the state.movies array with the payload data from the action
            state.movies = action.payload;  // store movie object in empty arry, the payload that has come from the home page
        }
    }

})

export const {setMovies} = movieSlice.actions; // export setMovie function
export const selectMovies = (state) => state.movie.movies; // export the movie array of state

export default movieSlice.reducer;