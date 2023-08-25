import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'  //allows you to access the state stored in the Redux store from within a React component. 
 

function Movies() {

    const movies = useSelector(selectMovies); // get movies from current state
    //console.log("This is movies", movies);
    //console.log(movies.id);
    
    
  return (

    <Container>
    <div>Recommended for you</div>
    <Content>

        {movies &&
            movies.map((movie) => (

                <Wrap key={movie.id}>
                    
                    <Link to = {`/detailpage/${movie.id}`}>  
                       <img src = {movie.cardImg} alt = "movies"/>
                       
                    </Link>
                </Wrap>

            ))
        }
        

    </Content>
    </Container>
  )
}

export default Movies


const Container = styled.div`

margin-top: 30px; 
overflow: hidden;



`
const Content = styled.div`


    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

`

const Wrap = styled.div`

    
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb( 0 0 0 / 69%) 0px 26px 30px -10px,
        rgb( 0 0 0 / 73%)  0px 16px 10px -10px; 
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;    

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    &:hover{

        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb( 0 0 0 / 88%) 0px 40px 58px -16px,
        rgb( 0 0 0 / 72%)  0px 30px 22px -10px; 
        

    }
`