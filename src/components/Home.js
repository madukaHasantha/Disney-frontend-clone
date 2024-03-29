import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import DetailPage from './DetailPage'
import db from '../firebase'
import { useDispatch} from "react-redux"
import { setMovies } from '../features/movie/movieSlice'



function Home() {

    const dispatch = useDispatch();

    useEffect(() => {

        db.collection("movies").onSnapshot((snapshot) =>{
            let tempMovies = snapshot.docs.map((doc) =>{
                //console.log(doc.data());
                return { id: doc.id, ...doc.data()}
            })

            dispatch(setMovies(tempMovies))
            //console.log(tempMovies);
        })
     }, [])


  return (
    <Container>
        <ImageSlider/>
        <Viewers/>
        <Movies/>
    </Container>
  )
} 

export default Home


const Container = styled.main`

    min-height: calc(100vh - 70px); // 100vh(vertical height) browser eke height eka, 70px adu karala thiyenne header eke height eka, min-height kiyanne pennana aduma height elka browser eke.
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {

        background: url("/images/home-background.png") center center /cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;

    }
    
`