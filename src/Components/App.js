import React from 'react'
import Search from './Search'
import MovieList from './MovieList'
import axios from 'axios';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends React.Component {
    state = {
        movies: [

        ],

        searchQuery: ""

    }



    async componentDidMount() {
       this.getMovies();
    }

    async getMovies() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data })
    }



      addMovie = async(movie) =>{

        await axios.post("http://localhost:3002/movies",movie)
        this.setState( state => ({
            movies : this.state.movies.concat([movie])
        }))
        this.getMovies();
    }


    editMovie = async(id ,updatedMovie) =>{

        await axios.put(`http://localhost:3002/movies/${id}`,updatedMovie)
        this.getMovies();
   
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

    editM

   

    render() 
    {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        ).sort((a, b) => {
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
        });



        return (

            <BrowserRouter>

                <Routes>

                    <Route path='/' element={

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


                    <Route path='/add' element = { <AddMovie send = {(movie) => {this.addMovie(movie)}} />}/>
                    <Route  path='/edit/:id' element={<EditMovie onEditMovie ={(id,movie) => {
                        this.editMovie(id,movie)
                    }}></EditMovie>} > </Route>
                  

                </Routes>
            </BrowserRouter>
        )
    }
}

export default App