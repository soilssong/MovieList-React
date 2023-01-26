
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EditMovie = (props) => {

    let navigate = useNavigate();
    const [movie, setData1] = useState(

        {
            name: "",
            rating: "",
            imageURL: "",
            overivew: "",
            id: "",

        }

    )

    useEffect(() => {
        getMovies()

    }, [])

    const getMovies = async () => {
        const id = window.location.pathname.replace("/edit/", "")
        const response = await axios.get(`http://localhost:3002/movies/${id}`);
        const movie = response.data
        setData1(movie)


    }

    const onInputChange = (e) => {

        if (e.target.name === "name")

            setData1({
                [e.target.name]: e.target.value,
                rating: movie.rating,
                imageURL: movie.imageURL,
                overview: movie.overview
            })

        if (e.target.name === "rating")
            setData1({
                name: movie.name,
                [e.target.name]: e.target.value,
                imageURL: movie.imageURL,
                overview: movie.overview
            })

        if (e.target.name === "imageURL")
            setData1({
                name: movie.name,
                rating: movie.rating,
                [e.target.name]: e.target.value,
                overview: movie.overview
            })

        if (e.target.name === "overview")
            setData1({
                name: movie.name,
                rating: movie.rating,
                imageURL: movie.imageURL,
                [e.target.name]: e.target.value
            })


    }

    const HandleformSubmit = (e) => {
        e.preventDefault();
        const id = window.location.pathname.replace("/edit/", "")
        const updatedMovie = {
            name: movie.name,
            rating: movie.rating,
            imageURL: movie.imageURL,
            overview: movie.overview

        }
        props.onEditMovie(id, updatedMovie)

        navigate(`/`)
    };
    return (


        <div className="container">
            <form className="mt-5" onSubmit={HandleformSubmit} >
                <input className="form-control" id="disabledInput" type="text" placeholder="Edit The Form To Update A Movie.." disabled />
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            value={movie.name}
                            onChange={onInputChange}


                        />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input
                            type="text"
                            className="form-control"
                            name="rating"
                            value={movie.rating}
                            onChange={onInputChange}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="imageURL"
                            value={movie.imageURL}
                            onChange={onInputChange}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea
                            className="form-control"
                            name="overview"
                            rows="5"
                            value={movie.overview}
                            onChange={onInputChange}
                        >
                      </textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Update Movie" />
            </form>
        </div>
    )


}

export default EditMovie