import React from "react";
import axios from "axios";
import Movie from "./movie";

class App extends React.Component{

  state={
    isLoading : true,
    movies: []
  };

  getMoives = async () =>{
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false})
  }
  
  componentDidMount(){
    this.getMoives();
  }


  render(){
    const {isLoading, movies} = this.state;
    return (
      <div>
        {isLoading ? 
        "Loading..." :
        movies.map(movie =>{
          return (
            <Movie 
            key={movie.id}
            title = {movie.title}
            year={movie.year} id={movie.id} 
            summary={movie.summary} 
            poster ={movie.medium_cover_image}/>
          )
        })}
        
      </div>
    );
  }
}


export default App;
