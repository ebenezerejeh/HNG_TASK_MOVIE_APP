import React, { useState, useEffect } from 'react';
import arrow from './assets/images/Expand_Arrow.png'
import Loading from './Loading';
import Error from './Error';
import navLogo from './assets/images/tv.png'
import home from './assets/images/Home.png'
import movieProjector from './assets/images/Movie_Projector.png'
import tvShow_logo from './assets/images/TV Show.png'
import Calender from './assets/images/Calendar.png'
import logOut_logo from './assets/images/Logout.png'
import trailer_image from './assets/images/trailer_image.png'
import star_image from './assets/images/Star.png'
import two_tickets from './assets/images/Two_Tickets.png'
import listImage_dark from './assets/images/List_dark.png'
import crewImage from './assets/images/trailer_crewImage.png'
import listImage_light from './assets/images/List_white.png'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from './context';
import axios from 'axios'



const SinglePage = () => {
    const {id} = useParams();
    console.log(id.length);
    
    console.log(typeof(parseInt(id)));
    const {data, loading, error, setError} = useGlobalContext();
    console.log(data);

    const nwValue=data.find((item)=>{
        return item.id===(parseInt(id));
    })
    console.log(nwValue);

    const { title, poster_path, release_date, vote_average, overview} = nwValue;
    var date = new Date(release_date);
    const nwDateValue = date.toUTCString();
    

    
    


  return (
    <>
    <div className="main_container">
        <div className="movieInfo_nav_container">
            <div className="movieInfo_logo_container">
                <div className="movieInfo_logo_box">
                    <img  src={navLogo} alt="movie_logo"/>
                    <span>MovieBox</span>
                </div>


            </div>
            
            
            
            
            <div className="movieInfo_navItems_container">
                <Link className='linkStyle' to='/'><div className="movieInfo_navItem"><img src={home} alt="homeLogo"/><span>Home</span></div></Link>
                <Link className='linkStyle' to='/'><div className="movieInfo_navItem"><img src={movieProjector} alt="movieProjector_logo" /><span>Movies</span></div></Link>
                <Link className='linkStyle' to='/'><div className="movieInfo_navItem"><img src={tvShow_logo} alt="tvShow_logo" /><span>TV Series</span></div></Link>
                <Link className='linkStyle' to='/'><div className="movieInfo_navItem"><img src={Calender} alt="Calendar_logo" /><span>Up Coming</span></div></Link>
            </div>
            <div className="movieInfo_quiz_container">
                <div className="movieInfo_quiz_item">
                    <p className="quizOne">Play movie quizes and earn free tickets</p>
                    <p className="quizTwo" >50k people are playing now</p>
                    <button>start playing</button>
                    
                </div>
            </div>
            <div className="movieInfo_logOut_container">
                
                <div className="movieInfo_navItem2"><img src={logOut_logo} alt="logOut_logo" /><span>Log Out</span></div>
                <div className="movieInfo_navItem3"><img src={logOut_logo} alt="logOut_logo" /><span>Log Out</span></div>

            </div>
            
            
        </div>
        <div className="movie_info_trailer_main">
            <div className="movieInfo_trailer_container"><img className="trailer_image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="trailer_image"/></div>
            
            <div className="trailerHeading_container">
                <div className="trailerHeading_nameTitle">
                    <span className="trailerTitle" data-testid='movie-title'>{title}</span>.
                    <span className="trailerYear"data-testid='movie-release-date'>{nwDateValue}</span>.
                    <span className="trailerAgeRating">PG-13</span>.
                    <span className="trailerTime" data-testid='movie-runtime'>200</span>
                </div>
                <div className="trailerHeading_genre">
                    <span>Action</span>
                    <span>Drama</span>
                </div>
                <div className="trailerHeading_rating">
                    <img src={star_image} alt="star_image"/>
                    <span>8.5 | 350k</span>
                </div>
            </div>
            <div className="trailerDetails_container">
                <div className="trailerDetails_text" data-testid='movie-overview'>{overview}</div>
                <div className="trailerDetails_button">

                    <button className="trailerDetails_buttonOne"><img src={two_tickets} alt="twoTickets_Image"/>See Showtimes</button>
                    <button className="trailerDetails_buttonTwo"><img src={listImage_dark} alt="List_Image"/>More Watch Options</button>
                </div>
            </div>
            <div className="trailerCrew_container">
                <div className="trailerCrew_details">
                    <p className="cast_details">Director:<span>Joseph Kosinski</span></p>
                    <p className="cast_details">Writers:<span>Jim Cash, Jack Epps Jr, Peter Craig</span></p>
                    <p className="cast_details">Stars:<span>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                    <div className="awards">
                        <div className="awards_rating">Top rated movie #65</div>
                        <div className="awards_nomination"><span>Awards 9 nominations</span> <img src={arrow} alt="expand_arrow"/></div>

                    </div>
                </div>
                <div className="trailerCrew_image">
                    <div className="crew_imageHolder"><img src={crewImage} alt="crew_image"/></div>
                    <div className="popular_demand"><img className="List_Image" src={listImage_light} alt="List_Image"/><span>The Best Movies and Shows in September</span></div>
                </div>
            </div>


        </div>



    </div>
    
    </>
  )
}

export default SinglePage