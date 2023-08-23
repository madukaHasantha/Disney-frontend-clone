import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'; 
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from "../features/user/userSlice";
import {useNavigate} from 'react-router-dom';

function Header() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName); 
    const userPhoto = useSelector(selectUserPhoto);
    const navigate = useNavigate();


    useEffect(() =>{

            auth.onAuthStateChanged(async (user) =>{
                if(user){
                    dispatch(setUserLogin({
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL
                    }))
                    navigate('/');
                }
            })
    }, [])


    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            navigate('/'); // Navigate to home page
        })
        .catch((error) => {
            console.error("Authentication error:", error);
        });
    }

    const signOut = () => {

        auth.signOut()
        .then(() => {
            dispatch(setSignOut());
            navigate('/login');
        })
    }
    

    return(

        <Nav>
        <Logo src = "/images/logo.svg"/>

        {!userName ? (

            <LoginContainer>
                <Login onClick={signIn}>LOGIN</Login>
            </LoginContainer>
            
                ) : (
                    <>
                        <NavMenu>
                        <a>
                            <img src="/images/home-icon.svg" />
                            <span>HOME</span>
                        </a>

                        <a>
                            <img src="/images/search-icon.svg" />
                            <span>SEARCH</span>
                        </a>

                        <a>
                            <img src="/images/watchlist-icon.svg" />
                            <span>WATCHLIST</span>
                        </a>

                        <a>
                            <img src="/images/original-icon.svg" />
                            <span>ORIGINALS</span>
                        </a>

                        <a>
                            <img src="/images/movie-icon.svg" />
                            <span>MOVIE</span>
                        </a>

                        <a>
                            <img src="/images/series-icon.svg" />
                            <span>SERIES</span>
                        </a>

                    </NavMenu>

                    <UserImage onClick = {signOut} src = "/images/MyImage.png"/>
                        
                        </>
            )}
            
                    
            
        </Nav>
            
        
    );
}
 
export default Header;

const Nav = styled.nav`
    height: 10vh; /* 10% of viewport height */
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 4vw; /* 4% of viewport width */
    overflow-x: hidden;

    @media (max-width: 768px) {
        /* Adjust padding for tablet-sized screens */
        padding: 0 2vw;
    }

    @media (max-width: 480px) {
        /* Adjust styles for mobile-sized screens */
        padding: 0 1vw; /* For example, adjust padding */
        height: 8vh; /* For example, adjust height */
    }
`;

const Logo = styled.img`

    width: 80px;

`;

const NavMenu = styled.div`

    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{

            height: 20px;
        }

        span{

            font-size: 13px
            letter-spacing: 1.42px;
            position: relative;

            &:after {    // span eken passe kiyna eka thamai me

                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;                   // uda thiyena okkoma visibale wenne 1 ta 0 wlt no visible
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);         // width eka px gana adu wedi wima 

            }
        }

        &:hover{             // hover ekedi e kiyanne couser ek lan krama spam eke after eke transform
            span:after{

                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImage = styled.img`

    height: 3vw; 
    width: 3vw; 
    border-radius: 50%;
    cursor: pointer;

    @media (max-width: 768px) {
        
        height: 4vw;
        width: 4vw;
    }
`

const Login = styled.div`

    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    font-size: 1.2vw;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    @media (max-width: 768px) {
        
        font-size: 1.5vw;
    }

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }`



    const LoginContainer = styled.div`
    
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: 2vw;

    @media (max-width: 768px) {
        
        padding-right: 1vw;
    }
    
    `