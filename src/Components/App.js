import React from 'react'
import Search from './Search'
import MovieList from './MovieList'
import axios from 'axios';
import AddMovie from './AddMovie';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

class App extends React.Component {



    state = {
        movies: [

        ],

        searchQuery: ""

    }



    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data })
    }



      addMovie = async(movie) =>{

        await axios.post("http://localhost:3002/movies",movie)
        this.setState( state => ({
            movies : this.state.movies.concat([movie])
        }))
    }


    deleteMovie = async (movie) => {
        axios.delete(`http://localhost:3002/movies/${movie.id} `)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState(state => ({
            movies: newMovieList
        }))
    }


    searchMovie = (event) => {

        this.setState({ searchQuery: event.target.value })
    }

   

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )


        return (

            <BrowserRouter>

                <Routes>

                    <Route path='/home' element={

                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <Search SearchMovieProp={this.searchMovie} />
                                </div>
                            </div>

                            <MovieList
                                movies={filteredMovies}
                                deleteMovieProps={this.deleteMovie}

                            />

                        </div>
                    } />


                    <Route path='/add' element = { 
                    <AddMovie send = {(movie) => {this.addMovie(movie)}} />

                    
                 
                    
                    
                    }/>
                </Routes>








            </BrowserRouter>








        )
    }
}

export default App