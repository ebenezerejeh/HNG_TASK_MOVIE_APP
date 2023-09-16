import React, { useEffect, useState } from 'react';
import Card from './Card';
import Loading from './Loading';
import { useGlobalContext } from './context';
import Error from './Error';
import axios from 'axios';
import reactLogo from './assets/react.svg'
import bannerImage from './assets/images/Poster.png'
import navLogo from './assets/images/tv.png'
import ellipse1 from './assets/images/Ellipse_1.svg'
import menu from './assets/images/Menu_alt_4.svg'
import imdbLogo from './assets/images/imdb_image.png'
import rt_logo from './assets/images/PngItem_1381056 1.png'
import playLogo from './assets/images/Play.svg'
import chevronRight from './assets/images/Chevron_right.svg'
import ellipse3 from './assets/images/Ellipse_3.svg'
import heartImage from './assets/images/Icon.svg'
import movieImage from './assets/images/movie_image.png'
import facebook_icon from './assets/images/fa-brands_facebook-square.svg'
import instagram_icon from './assets/images/fa-brands_instagram.svg'
import twitter_icon from './assets/images/fa-brands_twitter.svg'
import  youtube_icon from './assets/images/fa-brands_youtube.svg';


const Home = () => {
    const {data, loading, error} = useGlobalContext();
    

    if (loading) {
        return <Loading/>;
      }
    
      if (error) {
        return <Error/>;
      }
  

  return (
    <>
    <div className="container">
        <header>
            <img className="header_image" src={bannerImage} alt="banner_image"/>
            <div className="nav_container">
                <div className="nav_logo">  
                    <div className="logo_box">
                        <img src={navLogo} alt="navLogo"/>
                        <p>MovieBox</p>

                    </div> 
                </div>

                <div className="search_container">
                    <div className="search_box_container"><input className="input_search" type="text" placeholder="What do you want to watch ?"/></div>
                </div>

                <div className="navham_container">
                    <div className="navham_logo_box">

                        <p>Sign in</p>
                        <div className="nav_ellipseMenu">
                            <img className="nav_Ellipse" src={ellipse1} alt="ellipse" />
                            <img className="nav_menu" src={menu} alt="menu"/>
                        </div>

                    </div>
                    
                </div>

            </div>

            <div className="header_text_container">

                <div className="hero_text_container">
                    <div className="banner_movie_title"><p>John wick 3 : Parabellum</p></div>
                    <div className="banner_rating">
                        <div className="imdb_rating">
                            <img src={imdbLogo} alt="imdb_logo"  />
                            <p> 86.0/100</p>
                        </div>
                        <div className="rt_rating">
                            <img src={rt_logo} alt="rt_logo"  />
                            <p>97%</p>
                        </div>
                    </div>
                    <div className="banner_movie_info"><p>
                        John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                    </p></div>
                    <div className="trailer_button">
                        <div className="button"><img className="button_image"  src={playLogo} alt="play_logo" /><p>WATCH TRAILER</p>

                        </div>
                    </div>
    
                </div>
                
                
                <div className="pagination">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                </div>
            </div>

        </header>
        <section>
            <div className="section_heading">
                <div className="section_heading_text"><p>Featured Movie</p></div>
                <div className="section_heading_link"><p>See More </p> <img src={chevronRight} alt="chevron_right"/></div>

            </div>
            <div className="section_body">

                {data.map((item) => {
                    const {id, title, poster_path, release_date, vote_average} = item;
                    return(
                    <Card key={id} id={id} title={title} poster_path={poster_path} release_date={release_date} vote_average={vote_average} />
                    )
                    
                    })}
                

            </div>

        </section>
        <footer>
            <div className="footer_container">
                <div className="footer_icon_container">
                    <img src={facebook_icon} alt="facebook_icon"/>
                    <img src={instagram_icon} alt="instagram_icon"/>
                    <img src={twitter_icon} alt="twitter_icon"/>
                    <img src={youtube_icon} alt="facebook_icon"/>

                </div>
                <div className="policy_container">
                    <p>Conditions of Use</p>
                    <p  className="privacy_text">Privacy and Policy</p>
                    <p className="pressRoom_text">Press Room</p>

                </div>
                <div className="copywrite_container">
                    <p>© 2021 MovieBox by Adriana Eka Prayudha </p>

                </div>
            </div>
            
        </footer>

    </div>

    
    </>
  )
}

export default Home