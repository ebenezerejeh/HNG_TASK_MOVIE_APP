import React from 'react'
import ellipse3 from './assets/images/Ellipse_3.svg'
import heartImage from './assets/images/Icon.svg'
import movieImage from './assets/images/movie_image.png'
import imdbLogo from './assets/images/imdb_image.png'
import rt_logo from './assets/images/PngItem_1381056 1.png'
import { Link } from 'react-router-dom'



const Card = ({id, title, poster_path, release_date, vote_average}) => {
//   const {id, title, poster_path, release_date, vote_average} = 
    return (
   <>
   <Link className='linkStyle' to={`/SinglePage/${id}`} >
   <figure key={id} data-testid: movie-card>
                    <img className="card_image_ellipse" src={ellipse3} alt="card_image_ellipse"/>                                        
                    <img className="card_image_heart" src={heartImage} alt="card_image_heart" />
                    <div>
                        <img className="movie_thumbnail" data-testid: movie-poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="movie_thumbnail"/>
                    </div>
                    <figcaption>
                        <div className="country_date"><span>USA</span>,<span data-testid: movie-release-date>{release_date}</span></div>
                        <div className="movie_title" data-testid: movie-title>{title}</div>
                        <div className="banner_rating section_rating">
                            <div className="imdb_rating r2">
                                <img src={imdbLogo} alt="imdb_logo"  />
                                <p> {vote_average}/100</p>
                            </div>
                            <div className="rt_rating r2">
                                <img src={rt_logo} alt="rt_logo"  />
                                <p>97%</p>
                            </div>
                        </div>
                        <div className="movie_genre"><span>Action, Adventure</span></div>
                    </figcaption>

                </figure>
                </Link>

   
   </>
  )
}

export default Card