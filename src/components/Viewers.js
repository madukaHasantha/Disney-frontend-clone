
import React from 'react'
import styled from 'styled-components'


function Viewers() {
  return (

    <Container>
         <Wrap>
        <img src="/images/viewers-disney.png" alt="disney.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
        <Wrap>
            <img src = "/images/viewers-pixar.png" alt ="pixar.png"/>
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src = "/images/viewers-marvel.png" alt ="marvel.png"/>
                <video autoPlay={true} loop={true} playsInline={true} muted={true}>
            <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src = "/images/viewers-starwars.png" alt ="starwars.png"/>
                <video autoPlay={true} loop={true} playsInline={true} muted={true}>
            <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src = "/images/viewers-national.png" alt ="national.png"/>
                <video autoPlay={true} loop={true} playsInline={true} muted={true}>
            <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
            </video>
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`

    margin-top: 30px;
    display: grid; // grid use karanne coloumns hadaganna
    padding: 30px 0px 26px;  // top=30 right=0 bottom=26 left=0
    grid-gap: 25px; // coloumn wala gap eka
    grid-template-columns: repeat(5, minmax(0, 1fr));  // 5 kiyanne columns 5ta, mekata apita auto-fit wageth use krannath puluwan, eke anith value eka thamai eka cloumn ekk atha space eka. minmax() eke palaveni value eka min eka eka 0 wa kiyala thiyenawa, 0 kiyanne coloumn eke awama pramanaya, e kiyanne me eka colounm ekk pixel 0 wada kuda nowana bawa sahathika karanawa(eka sampurnayenma athurudahan wenne na). minmax eke anith value ek thamai max eka, ekedi wenne colomns godak add karanna karanna podi idak hari auto hada ganna eka

`

const Wrap = styled.div`

    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb( 0 0 0 / 69%) 0px 16px 10px -10px,
    rgb( 0 0 0 / 73%)  0px 16px 10px -10px;            // me coma(,) ehekin separate karala thiyenne shawdow dekk kiyana adahasa, eka shawdow ehekata amatharawa ita yatin thawa shawdow ekk add karala apita one nm thawa shawdow ekk add kragnna puluwan coma ekk dala, ita passe me box-shawdow ekata value 5k dila thiyenawa palaweni value eka thami colour eka, deweni value eka thamai Horizontal Offset eka (e kiyanne dakunu paththta shawdow eka), 3n weni value eka thamai Vertical Offset eka (e kiyanne yatat shawdow eka), 4 weni value eka thamai me shawdow eka blur wena eka, 5 weni value eka thamai shawdow eka expand wenna oni dura
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; // meka dala thiyenne wrap eka udata cursor eka genichchma eka popup wena speed eka adu kranna

    img{

        width: 100%; // image eke width eka okkom apennanawa.
        height: cover; // height eka coloum eke usata fit wenawa, cover wenawa.

    }

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 250ms ease-in-out;
      }

    &:hover{   // mulu wrap ekatama hover eka

        box-shadow: rgb( 0 0 0 / 88%) 0px 40px 58px -16px,
        rgb( 0 0 0 / 72%)  0px 30px 22px -10px; 
        transform: scale(1.05); // cursor ek wrap ek udata geniyaddi eka kochchra loku wenna onida kiyana eka
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
            z-index: -1;
          }

    }

`