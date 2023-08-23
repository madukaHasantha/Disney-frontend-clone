import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'


function DetailPage() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null); // Initialize with null instead of undefined

    useEffect(() => {
        //grab the movie in to db
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    //save the movie data
                    setMovie(doc.data());
                } else {
                    // Handle the case where the movie doesn't exist
                }
            });
    }, []);

    // Check if movie is still loading or not available
    if (!movie) {
        return <div>Loading...</div>;  
    }

        console.log("Movie is", movie);

  return (

    <Container>
        <Background>
            <img src = {movie.backgroundImg} alt = "detailpageImage"/>
        </Background>
        <ImageTitlt>
            <img src = {movie.titleImg} alt = "monalogo"/>
        </ImageTitlt>
        <Controls>
            <PlayButton>
                <img src = "/images/play-icon-black.png" alt = "playbuttonblack"/>
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                 <img src = "/images/play-icon-white.png" alt = "playbuttonwhite"/>
                <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
                    <span>+</span>
            </AddButton>
            <GroupWatchButton>
                 <img src = "/images/group-icon.png" alt = "groupbutton"/>
            </GroupWatchButton>

        </Controls>
        <SubTitle>
                {movie.subTitle}
        </SubTitle>
        <Description>
              {movie.description}
        </Description>
    </Container>
  )
}

export default DetailPage

const Container = styled.div`

    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
`

const Background = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.5;

    img{

        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
const ImageTitlt = styled.div`

    height: 30vh; // The vh (viewport height), v (viewport) is the area of the web browser where the webpage is displayed
    min-height: 170px;
    width: 35vw; //This value specifies that the element's width should be 35% of the viewport width
    min-width: 200px; // It ensures that the element will never become narrower than the specified minimum width
    margin-top: 50px;


    img{

        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`

    display: flex;
    align-items: center;
   
    

`


const PlayButton = styled.button`

    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198);
    }

`

const TrailerButton = styled(PlayButton)`

    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;

`

const AddButton = styled.button`

    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;


    span{

        font-size: 30px;
        color: white;
    }

`

const GroupWatchButton = styled(AddButton)`

    background: rgb(0, 0, 0);

`

const SubTitle = styled.div`

    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 16px;

`


const Description = styled.div`

    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 700px;

`
