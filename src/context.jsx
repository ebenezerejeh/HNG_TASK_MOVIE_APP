import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios'


const AppContext = React.createContext();

const AppProvider = ({ children }) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=30c30bafd6c7d301589ead2812353443&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    // const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=30c30bafd6c7d301589ead2812353443';
  
   


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(url); // Replace with your API URL
            const answer = response.data.results;
            const newValue = answer.slice(0,20);
            setData(newValue);
            // setData(data.slice(0,10));
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
    
   
        fetchData();
    }, []);

    console.log(data);
    // if (loading) {
    //   return <p>Loading...</p>;
    // }
  
    // if (error) {
    //   return <p>Error: {error.message}</p>;
    // }
  



    

    return (
        <AppContext.Provider
        value={{
            data,
            error,
            loading,
            setError
          
          }}>
          
          {children}
    
        </AppContext.Provider>
      )





}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  
  
  export { AppContext, AppProvider }
