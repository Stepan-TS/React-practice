import React, { useState } from "react";
import { useEffect } from "react";
import { onSnapshot } from 'firebase/firestore';
import {movieCollectionRef} from '../lib/firestore.collections';

export default function RealtimeMovies() {
    
    const [movies, setMovies] = useState([])

    useEffect(() => {

    const unsubscribe = onSnapshot(movieCollectionRef, snapshot => {
        setMovies(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
    })

    return () => {
        unsubscribe()
    }
    
    },[])
    
    
    
    
    return (
        <div>
            <h4>RealtimeMovies</h4>
            <ul>
                {movies.map(movie => (
                    <li key = {movie.id}>
                       {movie.data.name} ; Id:{movie.id}  
                    </li>

                ))}
            </ul>
        </div>
    )
}