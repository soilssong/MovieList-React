
import {useNavigate} from 'react-router-dom'
import serialize from 'form-serialize'
import axios from 'axios';
import { Component } from 'react';

import React, { useReducer, useEffect,useState } from 'react';




const EditMovie = (props) => {
 
   const HandleformSubmit = (e) =>
   {
  e.preventDefault();
          
      
   };


   
const [a,setData1] = useState()

const [b ,setData2] = useState()

const [c ,setData3] = useState()

const [d ,setData4] = useState()
  
useEffect(()=>{
    getMovies()
    
})

  const getMovies = async () => {
    const id = window.location.pathname.replace("/edit/", "")
   
       

    const response = await axios.get(`http://localhost:3002/movies/${id}`);
    const movie = response.data


   
   setData1(movie.name)
   setData2(movie.rating)
   setData3(movie.overview)
   setData4(movie.imageURL)

   }

   
   
   








 
   
 

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
                        value = {a}
                        />
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputRating">Rating</label>
                    <input
                        type="text"
                        className="form-control"
                        name="rating" 
                        value = {b}
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
                        value={c}
                        />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="overviewTextarea">Overview</label>
                    <textarea
                        className="form-control"
                        name="overview" rows="5"
                        value={d}></textarea>
                </div>
            </div>
            <input type="submit"  className="btn btn-danger btn-block" value="Update Movie" />
        </form>
    </div>
    )





}

export default EditMovie