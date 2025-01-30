import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BookDetail=()=>{
    const {id} = useParams();
    const[book,setBook]=useState(null);

    useEffect(()=>{
        axios.get('https://prickle-gilded-trader.glitch.me/books/${id}')
        .then(response=>setBook(response.data))
        .catch(error=>console.error(error));
        },[id]);
    if (!book)return <p>Loading...</p>
    return (
        <div>
        <h2>{book.name}</h2>
        <p>Category: {book.category}</p>
        <p>Price: ${book.price}</p>
        </div>
    );
};
export default BookDetail;